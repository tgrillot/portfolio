from django.shortcuts import render, redirect
from django.http import FileResponse, Http404
from portfolio.settings import MEDIA_URL, ADMIN_EMAIL
from content.forms import ContactForm
from django.core.mail import send_mail
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *


from .models import *

# Create your views here.

def viewProject(request, slug):
    aProject = project.objects.get(slug=slug)
    prjSkills = aProject.skills.all()
    context = {
        'project':aProject,
        'skills':prjSkills
    }
    return render(request, 'content/project.html', context)

def projects(request):
    projects = project.objects.all()
    context = {'projects':projects}
    return render(request, 'content/projects.html', context)

def viewSkill(request, slug):
    aSkill = skill.objects.get(slug=slug)
    projects = project.objects.all()
    skillProjects = []
    for proj in projects:
        if aSkill in proj.skills.all():
            skillProjects.append(proj)
    print(skillProjects)
    context = {
        'skill':aSkill,
        'projects':skillProjects
        }
    return render(request, 'content/skill.html', context)

def skills(request):
    skills = skill.objects.all()
    context = {'skills':skills}
    return render(request, 'content/skills.html', context)

# def about(request):
#     try:
#         owner = portfolioOwner.objects.all()[0]
#         bio = owner.bio
#     except Exception:
#         bio = 'No portfolio owner configured.'

#     edu = education.objects.all()
#     wrk = work.objects.all()
#     context = {
#         'bio':bio,
#         'edu':edu,
#         'work':wrk,
#         }
#     return render(request, 'content/about.html', context)

def contact(request):
    context = {}
    form = ContactForm(request.POST or None)
    context['form'] = form
    if request.POST:
        if form.is_valid():
            subject = form.cleaned_data["sender_name"] + ' : ' + form.cleaned_data["subject"]
            message = form.cleaned_data["message"]
            send_mail(subject,message,form.cleaned_data["from_email"],[ADMIN_EMAIL])
            return redirect('sent')
    return render(request, 'content/contact.html', context)

def view_resume(request):
    try:
        filename = portfolioOwner.objects.all()[0].resume.path
        path = os.path.join(MEDIA_URL, filename)
    except:
        path = '#'
    try:
        return FileResponse(open(path, 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404()

class OwnerViewSet(viewsets.ModelViewSet):
    queryset = portfolioOwner.objects.all()
    serializer_class = OwnerSerializer
    permission_classes = [permissions.IsAuthenticated]

class SkillViewSet(viewsets.ModelViewSet):
    queryset = skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]