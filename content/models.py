from django.db import models
from django.contrib import admin
from phonenumber_field.modelfields import PhoneNumberField #type: ignore #this import actually works

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

class portfolioOwner(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    git1 = models.URLField(max_length=2048,blank=True)
    git2 = models.URLField(max_length=2048,blank=True)
    resumeDL = models.URLField(max_length=2048,blank=True)
    bio = models.TextField()
    email = models.EmailField()
    phone = PhoneNumberField()

    @property
    def fullname(self):
        return self.fname + ' ' + self.lname

class portfolioOwnerAdmin(admin.ModelAdmin):
    list_display = ['fullname','email','phone']