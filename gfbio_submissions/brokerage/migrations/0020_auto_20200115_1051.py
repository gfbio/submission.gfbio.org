# Generated by Django 2.2.3 on 2020-01-15 10:51

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0019_auto_20200115_1049"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="taskprogressreport",
            name="changed",
        ),
        migrations.RemoveField(
            model_name="taskprogressreport",
            name="created",
        ),
    ]
