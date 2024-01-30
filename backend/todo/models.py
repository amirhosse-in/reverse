from django.db import models
from datetime import datetime

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title


class Rank(models.Model):
    Name = models.CharField(max_length=20)
    Author = models.CharField(max_length=20)
    Language = models.CharField(max_length=20)
    Arch = models.CharField(max_length=20)
    Difficulty = models.IntegerField()
    Quality = models.IntegerField()
    Platform = models.CharField(max_length=20)
    fileName = models.CharField(max_length=255)
    fileContent = models.TextField()
    created_at = models.DateTimeField(default=datetime.now())

    def _str_(self):
        return self.Name
    
class Users(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=255)
    mail = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=datetime.now())

class Solutions(models.Model):
    rankId = models.IntegerField()
    userId = models.IntegerField()
    fileName = models.CharField(max_length=255)
    fileContent = models.TextField()
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(default=datetime.now())

class Comments(models.Model):
    rankId = models.IntegerField()
    userId = models.IntegerField()
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(default=datetime.now())