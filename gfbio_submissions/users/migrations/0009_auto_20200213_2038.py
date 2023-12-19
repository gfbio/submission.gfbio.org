# Generated by Django 2.2.3 on 2020-02-13 20:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0008_auto_20200213_2025"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="external_user_id",
            field=models.CharField(
                blank=True,
                error_messages={"unique": "A user with that external_user_id already exists."},
                help_text="Not Required. 32 characters or fewer. Has to be unique if not Null.",
                max_length=32,
                null=True,
                unique=True,
                verbose_name="external userid",
            ),
        ),
    ]
