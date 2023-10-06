# Generated by Django 3.0.6 on 2020-07-21 12:10

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0041_persistentidentifier_user_notified"),
    ]

    operations = [
        migrations.AlterField(
            model_name="persistentidentifier",
            name="pid_type",
            field=models.CharField(
                choices=[
                    ("ACC", "ENA Accession Number"),
                    ("PRJ", "ENA BioProject ID (primary Accession Number)"),
                    ("TSQ", "ENA Accession for targeted sequence submission"),
                    ("DOI", "Pangea Doi"),
                    ("BSA", "Biosample"),
                    ("LBL", "Generic Label"),
                ],
                default="ACC",
                max_length=3,
            ),
        ),
    ]
