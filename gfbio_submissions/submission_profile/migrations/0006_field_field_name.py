# Generated by Django 4.1 on 2024-05-24 13:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):
    dependencies = [
        ("submission_profile", "0005_field_comment_fieldtype_comment_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="field",
            name="field_name",
            field=models.SlugField(
                default=django.utils.timezone.now,
                help_text="A descriptive name for the field. this will help in differentiating and selecting between fields. e.g. 'generic_title' or 'molecular_embargo_date'",
                max_length=32,
            ),
            preserve_default=False,
        ),
    ]