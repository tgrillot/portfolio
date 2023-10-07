from django.shortcuts import render
from content.models import skill,portfolioOwner,project

# Create your views here.

def home(request):
    skillz = skill.objects.all()

    try:
        owner = portfolioOwner.objects.all()[0]
        bio = owner.bio
    except Exception:
        bio = 'No portfolio owner configured.'

    featured_projects = project.objects.filter(promoted=True)

    context = {
        'skills':skillz,
        'bio':bio,
        'projects':featured_projects,
    }
    return render(request, 'home.html', context)
 