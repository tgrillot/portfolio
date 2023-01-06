from content.models import portfolioOwner

def returnOwner(request):
    try: 
        owner = portfolioOwner.objects.all()[0]
        context = {
            'name':owner.fullname,
            'tagline':owner.tagline,
            'gitea':owner.git2,
            'github':owner.git1,
            'linkedin':owner.linkedin,
            'upwork':owner.upwork,
            'resume':owner.resume
            }
    except Exception:
        context = {
            'name':'No portfolio owner configured.',
            'tagline':'No portfolio owner configured.',
            'gitea':'#',
            'github':'#',
            'linkedin':'#',
            'upwork':'#',
            'resume':'#'
        }
    return context
