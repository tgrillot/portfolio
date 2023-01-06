from django.shortcuts import render
from django.http import FileResponse, Http404
from portfolio.settings import MEDIA_URL

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
    context = {'skill':aSkill}
    return render(request, 'content/skill.html', context)

def skills(request):
    skills = skill.objects.all()
    context = {'skills':skills}
    return render(request, 'content/skills.html', context)

def about(request):
    try:
        owner = portfolioOwner.objects.all()[0]
        bio = owner.bio
    except Exception:
        bio = 'No portfolio owner configured.'

    edu = education.objects.all()
    wrk = work.objects.all()
    context = {
        'bio':bio,
        'edu':edu,
        'work':wrk,
        }
    return render(request, 'content/about.html', context)

def contact(request):
    return render(request, 'content/contact.html')

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