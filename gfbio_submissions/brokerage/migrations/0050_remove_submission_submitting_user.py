# Generated by Django 3.0.6 on 2021-04-19 12:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('brokerage', '0049_remove_submission_site'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='submission',
            name='submitting_user',
        ),
    ]