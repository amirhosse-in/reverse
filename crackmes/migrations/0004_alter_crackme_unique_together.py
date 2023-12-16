# Generated by Django 5.0 on 2023-12-16 10:22

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crackmes', '0003_alter_crackme_binary_file'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='crackme',
            unique_together={('user', 'title')},
        ),
    ]