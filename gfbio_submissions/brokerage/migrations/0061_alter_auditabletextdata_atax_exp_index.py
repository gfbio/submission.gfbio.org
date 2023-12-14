# Generated by Django 4.1 on 2023-08-30 13:14

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0060_auditabletextdata_atax_exp_index"),
    ]

    operations = [
        migrations.AlterField(
            model_name="auditabletextdata",
            name="atax_exp_index",
            field=models.SmallIntegerField(
                blank=True,
                default=-1,
                help_text="single uploads: exponents for powers of two, combination: sum of single upload powers of two",
            ),
        ),
    ]
