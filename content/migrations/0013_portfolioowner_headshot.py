# Generated by Django 3.2.16 on 2023-04-27 18:17

import content.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0012_education_gradyear'),
    ]

    operations = [
        migrations.AddField(
            model_name='portfolioowner',
            name='headshot',
            field=models.ImageField(blank=True, upload_to=content.models.set_headshot_filename),
        ),
    ]
