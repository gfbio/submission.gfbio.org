# Generated by Django 4.1 on 2024-06-24 13:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("submission_profile", "0021_field_placeholder"),
    ]

    operations = [
        migrations.AddField(
            model_name="field",
            name="order",
            field=models.IntegerField(default=100, help_text="Rank within in the elements in the layout-position"),
        ),
        migrations.AddField(
            model_name="field",
            name="position",
            field=models.CharField(
                choices=[("main", "main"), ("sidebar", "sidebar")],
                default="main",
                help_text="Position of the element in the Layout of the form",
                max_length=7,
            ),
        ),
    ]
