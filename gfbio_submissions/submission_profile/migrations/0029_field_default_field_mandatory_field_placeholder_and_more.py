# Generated by Django 4.1 on 2024-07-24 19:28

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("submission_profile", "0028_profilefieldextension_system_wide_mandatory"),
    ]

    operations = [
        migrations.AddField(
            model_name="field",
            name="default",
            field=models.TextField(blank=True, default="", max_length=64),
        ),
        migrations.AddField(
            model_name="field",
            name="mandatory",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="field",
            name="placeholder",
            field=models.TextField(
                blank=True,
                default="",
                help_text="Descriptive text displayed within the input field unless it is filled out",
            ),
        ),
        migrations.AddField(
            model_name="field",
            name="visible",
            field=models.BooleanField(default=True),
        ),
    ]
