from django.db import models
from django.contrib import admin
from phonenumber_field.modelfields import PhoneNumberField
from tinymce.widgets import TinyMCE

# Create your models here.

class skill(models.Model):
    EXP = (
        ('exp','Expert'),
        ('pro','Proficient'),
        ('com', 'Competent'),
        ('adv', 'Advanced Beginner'),
        ('nov', 'Novice')
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

class portfolioOwner(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    git1 = models.URLField(max_length=2048,blank=True)
    git2 = models.URLField(max_length=2048,blank=True)
    linkedin = models.URLField(max_length=2048,blank=True)
    upwork = models.URLField(max_length=2048,blank=True)
    resumeDL = models.URLField(max_length=2048,blank=True)
    bio = models.TextField()
    email = models.EmailField()
    phone = PhoneNumberField()
    tagline = models.CharField(max_length=300,blank=True)

    @property
    def fullname(self):
        return self.fname + ' ' + self.lname

class portfolioOwnerAdmin(admin.ModelAdmin):
    list_display = ['fullname','email','phone']
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE}
    }

class education(models.Model):
    institution = models.CharField(max_length=50)
    award = models.CharField(max_length=50)
    major = models.CharField(max_length=50,blank=True)
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