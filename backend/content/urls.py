from django.urls import path, include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'owner', views.OwnerViewSet)
router.register(r'skills', views.SkillViewSet)
router.register(r'projects', views.ProjectViewSet)



urlpatterns = [
    path('projects/<str:slug>',views.viewProject,name='project'),
    path('projects/',views.projects,name='projects'),
    path('skills/<str:slug>',views.viewSkill,name='skill'),
    path('skills/',views.skills,name='skills'),
    # path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('contact/message_sent', views.contact, name='sent'),
    path('resume', views.view_resume, name='resume'),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]