# Generated by Django 2.2.3 on 2019-10-01 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20190802_1246'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='goesternid',
            field=models.CharField(blank=True, error_messages={'unique': 'A user with that goesternid already exists.'}, help_text='Not Required. 32 characters or fewer. digits only', max_length=32, null=True, unique=True, verbose_name='username'),
        ),
    ]