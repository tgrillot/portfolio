from django.contrib import admin
from django.urls import path,include

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('tinymce/', include('tinymce.urls')), 

    path('', include('content.urls')),
    path('', views.home, name='home'),
    
]

handler404 = "portfolio.views.custom404"