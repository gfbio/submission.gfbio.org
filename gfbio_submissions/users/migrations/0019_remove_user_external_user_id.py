# Generated by Django 3.0.6 on 2021-04-22 13:24

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0018_auto_20210420_1442"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="external_user_id",
        ),
    ]
