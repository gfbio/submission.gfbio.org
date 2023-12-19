# Generated by Django 2.2.3 on 2020-02-13 19:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0006_auto_20200213_1553"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="user",
            name="goesternid",
        ),
        migrations.AddField(
            model_name="user",
            name="external_user_id",
            field=models.CharField(
                blank=True,
                error_messages={"unique": "A user with that external_user_id already exists."},
                help_text="Not Required. 32 characters or fewer. Has to be unique if not Null.",
                max_length=32,
                null=True,
                unique=True,
                verbose_name="external_user_id",
            ),
        ),
    ]
