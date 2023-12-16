# models.py

from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User

def custom_upload_to(instance, filename):
    # Get the username and title
    username = instance.user.username
    title = instance.title

    # Construct the file path
    file_path = f'crackme_binaries/{username}_{title}_{filename}'
    return file_path

class Crackme(models.Model):
    OPERATING_SYSTEM_CHOICES = [
        ('Windows', 'Windows'),
        ('Linux', 'Linux'),
        ('MacOS', 'MacOS'),
        ('Other', 'Other'),
    ]

    title = models.CharField(max_length=255)
    description = models.TextField()
    operating_system = models.CharField(max_length=20, choices=OPERATING_SYSTEM_CHOICES)
    hardness_level = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)], default=1)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    binary_file = models.FileField(upload_to=custom_upload_to, null=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'title'], name='unique_user_title')
        ]

    def __str__(self):
        return f"{self.title} by {self.user.username}" 

class Solution(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    crackme = models.ForeignKey(Crackme, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    binary_file = models.FileField(upload_to='solution_binaries/', null=True)

    def __str__(self):
        return f'{self.user.username} - {self.title}'

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    crackme = models.ForeignKey(Crackme, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField()

    def save(self, *args, **kwargs):
        if not self.timestamp:
            self.timestamp = timezone.now()
        return super().save(*args, **kwargs)
    
    def __str__(self):
        return f'{self.user.username} - {self.crackme.title}'