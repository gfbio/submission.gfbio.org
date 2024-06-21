# Generated by Django 4.1 on 2024-06-20 13:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("submission_profile", "0018_profile_system_wide_profile"),
    ]

    operations = [
        migrations.AddField(
            model_name="profile",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="user_profiles",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
