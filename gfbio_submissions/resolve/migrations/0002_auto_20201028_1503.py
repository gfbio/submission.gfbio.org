# Generated by Django 3.0.6 on 2020-10-28 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resolve', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='accession',
            name='id',
        ),
        migrations.AlterField(
            model_name='accession',
            name='identifier',
            field=models.CharField(max_length=256, primary_key=True, serialize=False),
        ),
    ]
