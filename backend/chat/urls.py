# chat/urls.py
from django.urls import path
from .views import chat, send_message, get_messages

urlpatterns = [
    path('chat/<str:username>/', chat, name='chat'),
    path('api/send/', send_message, name='send_message'),
    path('api/messages/<str:username>/', get_messages, name='get_messages'),
]