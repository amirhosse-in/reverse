# In your chat/urls.py file

from django.urls import path
from .views import private_chat, send_message, get_messages

app_name = 'chat'

urlpatterns = [
    path('private_chat/<int:chat_id>/', private_chat, name='private_chat'),
    path('send_message/<int:chat_id>/', send_message, name='send_message'),
    path('get_messages/<int:chat_id>/<int:last_message_id>/', get_messages, name='get_messages'),
    # Add other URLs as needed
]
