# Generated by Django 2.2.3 on 2020-02-13 20:25

from django.db import migrations
import gfbio_submissions.users.managers


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0007_auto_20200213_1945"),
    ]

    operations = [
        migrations.AlterModelManagers(
            name="user",
            managers=[
                ("objects", gfbio_submissions.users.managers.CustomUserManager()),
            ],
        ),
    ]
