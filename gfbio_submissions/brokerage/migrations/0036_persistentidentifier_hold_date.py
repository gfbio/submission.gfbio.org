# Generated by Django 2.2.3 on 2020-03-18 10:35

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0035_merge_20200303_2135"),
    ]

    operations = [
        migrations.AddField(
            model_name="persistentidentifier",
            name="hold_date",
            field=models.DateField(blank=True, null=True),
        ),
    ]
