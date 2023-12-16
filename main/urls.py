# main/urls.py

from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    path('logout/', user_logout, name='logout'),
]
