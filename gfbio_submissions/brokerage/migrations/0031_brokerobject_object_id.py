# Generated by Django 2.2.3 on 2020-02-18 12:52

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0030_auto_20200218_1055"),
    ]

    operations = [
        migrations.AddField(
            model_name="brokerobject",
            name="object_id",
            field=models.CharField(default="", max_length=32),
        ),
    ]
