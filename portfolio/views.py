from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def custom404(request, exception):
    return render(request, '404.html', status=404)