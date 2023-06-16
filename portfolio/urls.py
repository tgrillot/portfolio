from django.contrib import admin
from django.urls import path,include,re_path
from django.conf.urls.static import static
from django.views.static import serve
from django.conf import settings


from . import views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('tinymce/', include('tinymce.urls')), 

    path('', include('content.urls')),
    path('', views.home, name='home'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT, }), ]