# Generated by Django 5.0 on 2023-12-16 11:57

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crackmes', '0005_alter_crackme_unique_together_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='description',
            new_name='text',
        ),
        migrations.RemoveField(
            model_name='comment',
            name='title',
        ),
        migrations.AddField(
            model_name='comment',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2023, 12, 16, 11, 57, 46, 748711, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]
