from django.shortcuts import render

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