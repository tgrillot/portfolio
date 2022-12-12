from django.urls import path

from . import views

urlpatterns = [
    path('projects/<str:slug>',views.viewProject,name='project'),
    path('projects/',views.projects,name='projects'),
    path('skills/<str:slug>',views.viewSkill,name='skill'),
    path('skills/',views.skills,name='skills'),    
]
