# Generated by Django 4.1 on 2024-06-20 09:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("submission_profile", "0020_alter_profile_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="field",
            name="placeholder",
            field=models.TextField(
                blank=True,
                default="",
                help_text="Descriptive text displayed within the input field unless it is filled out",
            ),
        ),
    ]