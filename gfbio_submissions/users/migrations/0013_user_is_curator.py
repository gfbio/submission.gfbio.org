# Generated by Django 3.0.6 on 2020-07-02 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0012_auto_20200327_0833'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='is_curator',
            field=models.BooleanField(default=False),
        ),
    ]
