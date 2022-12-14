from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(skill, skillAdmin)
admin.site.register(project, projectAdmin)
admin.site.register(portfolioOwner,portfolioOwnerAdmin)
admin.site.register(education,educationAdmin)