# Generated by Django 4.1 on 2024-03-04 15:47

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):
    dependencies = [
        ("submission_profile", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="FieldType",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now, editable=False, verbose_name="created"
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now, editable=False, verbose_name="modified"
                    ),
                ),
                ("type", models.CharField(max_length=32)),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Field",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now, editable=False, verbose_name="created"
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now, editable=False, verbose_name="modified"
                    ),
                ),
                ("title", models.CharField(max_length=64)),
                ("description", models.TextField(blank=True, default="")),
                (
                    "field_type",
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="submission_profile.fieldtype"),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.AddField(
            model_name="profile",
            name="fields",
            field=models.ManyToManyField(to="submission_profile.field"),
        ),
    ]
