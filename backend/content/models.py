from django.db import models
from django.contrib import admin
from phonenumber_field.modelfields import PhoneNumberField
from tinymce.widgets import TinyMCE
import os
from django.forms.widgets import Textarea
from django.core.exceptions import ValidationError
from portfolio.settings import ALLOWED_FILE_UPLOAD_TYPES
from django.dispatch import receiver


#### Portfolio Owner Model and utils #####

# check if uploaded resume is a pdf
def validate_resume_filetype(value):
    ext = os.path.splitext(value.name)[1]
    if not ext in ALLOWED_FILE_UPLOAD_TYPES:
        raise ValidationError(u'Invalid file type. You may only upload pdf files.')

# set the filename for the resume    
def set_resume_filename(instance, filename):
    path = 'owner_resume/'
    format = instance.fname + '_' + instance.lname + '_Resume' + os.path.splitext(filename)[1]
    return os.path.join(path, format)

# set the filename for the headshot
def set_headshot_filename(instance,filename):
    path = 'owner_headshot/'
    format = instance.fname + '_' + instance.lname + '_Headshot' + os.path.splitext(filename)[1]
    return os.path.join(path,format)

# portfolio owner class declaration
class portfolioOwner(models.Model):
    fname = models.CharField(max_length=50,blank=True)
    lname = models.CharField(max_length=50,blank=True)
    sitename = models.CharField(max_length=50,blank=True)
    github = models.URLField(max_length=2048,blank=True)
    gitea = models.URLField(max_length=2048,blank=True)
    linkedin = models.URLField(max_length=2048,blank=True)
    upwork = models.URLField(max_length=2048,blank=True)
    resume = models.FileField(upload_to=set_resume_filename,blank=True,validators=[validate_resume_filetype])
    headshot = models.ImageField(upload_to=set_headshot_filename,blank=True)
    bio = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    phone = PhoneNumberField(blank=True)
    taglines = models.JSONField(default=list, blank=True, null=True)
    headline = models.CharField(max_length=100,blank=True)

    @property
    def fullname(self):
        return self.fname + ' ' + self.lname

class portfolioOwnerAdmin(admin.ModelAdmin):
    list_display = ['fullname','email','phone']

    # allow only one portfolio owner
    def has_add_permission(self, request):
        base_add_permission = super(portfolioOwnerAdmin, self).has_add_permission(request)
        if base_add_permission:
            count = portfolioOwner.objects.all().count()
            if count == 0:
                return True
        return False

# delete resume and headshot files if portfolio owner is deleted
@receiver(models.signals.post_delete, sender=portfolioOwner)
def delete_resume_on_delete_owner(sender, instance, **kwargs):
    if instance.resume:
        if os.path.isfile(instance.resume.path):
            os.remove(instance.resume.path)
    if instance.headshot:
        if os.path.isfile(instance.headshot.path):
            os.remove(instance.headshot.path)

# delete old resume/headshot file if new one is uploaded
@receiver(models.signals.pre_save, sender=portfolioOwner)
def delete_resume_on_new_resume_upload(sender, instance, **kwargs):
    
    resumechange = True
    headshotchange = True

    if not instance.pk:
        return False

    try:
        old_resume = portfolioOwner.objects.get(pk=instance.pk).resume
    except Exception:
        resumechange = False

    try:
        old_headshot = portfolioOwner.objects.get(pk=instance.pk).headshot
    except Exception:
        headshotchange = False

    if resumechange == True:
        new_resume = instance.resume
    
    if headshotchange == True:
        new_headshot = instance.headshot

    try:
        if not old_resume == new_resume:
            if os.path.isfile(old_resume.path):
                os.remove(old_resume.path)
    except Exception:
        resumechange = False

    try:
        if not old_headshot == new_headshot:
            if os.path.isfile(old_headshot.path):
                os.remove(old_headshot.path)
    except Exception:
        headshotchange = False

    if resumechange == False and headshotchange == False:
        return False


##### Other Models #####

class skill(models.Model):
    EXP = (
        ('exp','Expert'),
        ('pro','Proficient'),
        ('com','Competent'),
        ('adv','Advanced Beginner'),
        ('nov','Novice')
    )
    name = models.CharField(max_length=50,blank=False,null=False,unique=True)
    blurb = models.CharField(max_length=150,blank=False,null=False)
    explevel = models.CharField(max_length=3,choices=EXP,blank=False,null=False,default='exp')
    longdesc = models.TextField()
    slug = models.SlugField(null=True,unique=True)

    def __str__(self):
        return self.name

class skillAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug":("name",)}
    list_display = ['name','blurb','explevel']
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE}
    }

class project(models.Model):
    name = models.CharField(max_length=50,blank=False,null=False,unique=True)
    tagline = models.CharField(max_length=150,blank=False,null=False)
    startdate = models.DateField()
    enddate = models.DateField()
    longdesc = models.TextField()
    repo = models.URLField(max_length=2048,blank=True)
    live = models.URLField(max_length=2048,blank=True)
    promoted = models.BooleanField(default=False)
    skills = models.ManyToManyField(skill)
    slug = models.SlugField(null=True,unique=True)

    def __str__(self):
        return self.name

class projectAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug":("name",)}
    list_display = ['name','tagline','promoted']
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE}
    }

class education(models.Model):
    institution = models.CharField(max_length=50)
    award = models.CharField(max_length=50)
    major = models.CharField(max_length=50,blank=True)
    gradyear = models.CharField(max_length=50,blank=True)
    concentration = models.CharField(max_length=50,blank=True)
    achievements = models.TextField(blank=True)

class educationAdmin(admin.ModelAdmin):
    list_display = ['institution','award','major',]
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE}
    }

class work(models.Model):
    company = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    startdate = models.DateField()
    enddate = models.DateField()
    description = models.TextField()

class workAdmin(admin.ModelAdmin):
    list_display = ['company','position','startdate','enddate']
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE}
    }