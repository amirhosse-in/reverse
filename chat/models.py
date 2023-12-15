# models.py

from django.db import models
from django.contrib.auth.models import User

class PrivateChat(models.Model):
    user1 = models.ForeignKey(User, related_name='user1_chats', on_delete=models.CASCADE)
    user2 = models.ForeignKey(User, related_name='user2_chats', on_delete=models.CASCADE)

    def __str__(self):
        return f'Chat between {self.user1.username} and {self.user2.username}'

class Message(models.Model):
    chat = models.ForeignKey(PrivateChat, related_name='messages', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.sender.username} in {self.chat}: {self.content}'
