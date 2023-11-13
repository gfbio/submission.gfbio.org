# Generated by Django 4.0.8 on 2023-08-22 12:20

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0059_auditabletextdata_atax_file_name_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="auditabletextdata",
            name="atax_exp_index",
            field=models.SmallIntegerField(blank=True, default=-1, help_text="exponent for powers of two"),
        ),
    ]