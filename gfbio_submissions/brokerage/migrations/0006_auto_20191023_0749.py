# Generated by Django 2.2.3 on 2019-10-23 07:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('brokerage', '0005_auto_20190917_1945'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='submission',
            name='changed',
        ),
        migrations.RemoveField(
            model_name='submission',
            name='created',
        ),
    ]
