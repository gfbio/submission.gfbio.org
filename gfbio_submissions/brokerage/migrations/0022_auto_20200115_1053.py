# Generated by Django 2.2.3 on 2020-01-15 10:53

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0021_auto_20200115_1052"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="auditabletextdata",
            name="changed",
        ),
        migrations.RemoveField(
            model_name="auditabletextdata",
            name="created",
        ),
    ]
