# Generated by Django 4.1 on 2024-04-12 13:17

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0064_submissionreport_user"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="submissionreport",
            name="user",
        ),
    ]
