from django.urls import path
from .views import *

app_name = 'crackmes'

urlpatterns = [
    path('submit/', submit_crackme, name='submit_crackme'),
    path('download/<int:pk>/', download_binary, name='download_binary'),
    path('<str:username>/', crackme_list_for_user, name='crackme_list_for_user'),
    path('<str:username>/<str:title>/', crackme_detail, name='crackme_detail'),
    path('<str:username>/<str:title>/download/', download_binary, name='download_binary'),
    path('<str:username>/<str:title>/submit_solution/', submit_solution, name='submit_solution'),
    path('<str:username>/<str:title>/download_solution/', download_solution, name='download_solution'),
    path('', CrackmeListView.as_view(), name='crackme_list'),

]