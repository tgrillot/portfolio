# Generated by Django 3.2.16 on 2023-01-09 15:22

import content.models
from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0010_auto_20230106_1032'),
    ]

    operations = [
        migrations.RenameField(
            model_name='portfolioowner',
            old_name='git1',
            new_name='gitea',
        ),
        migrations.RenameField(
            model_name='portfolioowner',
            old_name='git2',
            new_name='github',
        ),
        migrations.AlterField(
            model_name='portfolioowner',
            name='bio',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='portfolioowner',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='portfolioowner',
            name='fname',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='portfolioowner',
            name='lname',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='portfolioowner',
            name='phone',
            field=phonenumber_field.modelfields.PhoneNumberField(blank=True, max_length=128, region=None),
        ),
        migrations.AlterField(
            model_name='portfolioowner',
            name='resume',
            field=models.FileField(blank=True, upload_to=content.models.set_resume_filename, validators=[content.models.validate_resume_filetype]),
        ),
    ]
