# Generated by Django 4.1 on 2024-09-26 12:47

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("submission_profile", "0024_profile_active_user_profile"),
    ]

    operations = [
        migrations.DeleteModel(
            name="ProfileFieldExtension",
        ),
    ]