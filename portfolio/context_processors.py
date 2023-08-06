import random
from content.models import portfolioOwner

def returnOwner(request):
    try: 
        owner = portfolioOwner.objects.all()[0]
        taglines = []
        for line in owner.tagline.splitlines():
            line = line.strip('</p>')
            taglines.append(line)
        tagline = taglines[random.randrange(len(taglines))]
        context = {
            'name':owner.fullname,
            'tagline':tagline,
            'taglines':taglines,
            'gitea':owner.gitea,
            'github':owner.github,
            'linkedin':owner.linkedin,
            'upwork':owner.upwork,
            'headshot':owner.headshot.url,
            }
    except Exception:
        context = {
            'name':'No portfolio owner configured.',
            'tagline':'No portfolio owner configured.',
            'taglines':'No portfolio owner configured.',
            'gitea':'#',
            'github':'#',
            'linkedin':'#',
            'upwork':'#',
            'headshot':'',
        }
    return context
