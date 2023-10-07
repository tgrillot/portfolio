import random
from content.models import portfolioOwner

def returnOwner(request):
    try: 
        owner = portfolioOwner.objects.all()[0]
        tagline = owner.taglines[random.randrange(len(owner.taglines))]
        context = {
            'name':owner.fullname,
            'fname':owner.fname,
            'tagline':tagline,
            'gitea':owner.gitea,
            'github':owner.github,
            'linkedin':owner.linkedin,
            'upwork':owner.upwork,
            'headshot':owner.headshot.url,
            'headline':owner.headline,
            'sitename':owner.sitename,
            }
    except Exception:
        context = {
            'name':'No portfolio owner configured.',
            'fname':'No portfolio owner configured.',
            'tagline':'No portfolio owner configured.',
            'gitea':'#',
            'github':'#',
            'linkedin':'#',
            'upwork':'#',
            'headshot':'',
            'headline':'No portfolio owner configured.',
            'sitename':'No portfolio owner configured.'
        }
    return context
