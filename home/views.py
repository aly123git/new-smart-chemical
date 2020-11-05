from django.shortcuts import render

def home(request):
    return render(request, 'home.html',{})

def services(request):
    return render(request, 'services.html',{})