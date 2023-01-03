from content.models import portfolioOwner

def returnTagline(request):
    owner = portfolioOwner.objects.get(id=1)
    tag = owner.tagline
    context = {'tagline':tag}
    return context