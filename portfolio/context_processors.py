from content.models import portfolioOwner

def returnOwner(request):
    try: 
        owner = portfolioOwner.objects.all()[0]
        context = {
            'name':owner.fullname,
            'tagline':owner.tagline,
            'gitea':owner.gitea,
            'github':owner.github,
            'linkedin':owner.linkedin,
            'upwork':owner.upwork,
            }
    except Exception:
        context = {
            'name':'No portfolio owner configured.',
            'tagline':'No portfolio owner configured.',
            'gitea':'#',
            'github':'#',
            'linkedin':'#',
            'upwork':'#',
        }
    return context
