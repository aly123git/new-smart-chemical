from django.urls import path
from . import views
app_name= 'home'

urlpatterns = [
    path('', views.home, name=''),
    path('services/', views.services, name='services'),

]