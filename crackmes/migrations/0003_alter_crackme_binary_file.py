# Generated by Django 5.0 on 2023-12-16 10:21

import crackmes.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crackmes', '0002_remove_crackme_level_crackme_binary_file_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='crackme',
            name='binary_file',
            field=models.FileField(null=True, upload_to=crackmes.models.custom_upload_to),
        ),
    ]
