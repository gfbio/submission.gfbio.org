# Generated by Django 4.1 on 2024-05-24 09:26

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("submission_profile", "0004_alter_fieldtype_type_alter_profile_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="field",
            name="comment",
            field=models.TextField(
                blank=True,
                default="",
                help_text="Comment text describing the field. This is optional. The information provided here WILL NOT BE SHOWN IN THE FORM",
            ),
        ),
        migrations.AddField(
            model_name="fieldtype",
            name="comment",
            field=models.TextField(
                blank=True,
                default="",
                help_text="A human-readable description of the field type.WILL NOT BE SHOWN OR USED IN THE FORM.",
            ),
        ),
        migrations.AlterField(
            model_name="field",
            name="description",
            field=models.TextField(
                blank=True, default="", help_text="Descriptive text, below the title in the rendered Form"
            ),
        ),
        migrations.AlterField(
            model_name="field",
            name="title",
            field=models.CharField(help_text="Title of the field, as displayed in the rendered Form", max_length=64),
        ),
        migrations.AlterField(
            model_name="fieldtype",
            name="type",
            field=models.SlugField(
                help_text="A unique identifier naming the type of the field. It is used to map this field_type to a frontend codeblock that will be rendered as part of the Form.",
                max_length=32,
                unique=True,
            ),
        ),
    ]
