from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.title


class Rank(models.Model):
    Name = models.CharField(max_length=20)
    NameLink = models.CharField(max_length=120)
    Author = models.CharField(max_length=20)
    AuthorLink = models.CharField(max_length=120)
    Language = models.CharField(max_length=20)
    Arch = models.CharField(max_length=20)
    Difficulty = models.IntegerField()
    Quality = models.IntegerField()
    Platform = models.CharField(max_length=20)
    Date = models.DateField()
    Solution = models.IntegerField()
    Comments = models.IntegerField()

    def _str_(self):
        return self.Name
