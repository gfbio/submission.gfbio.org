# Generated by Django 2.2.3 on 2020-02-18 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brokerage', '0031_brokerobject_object_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brokerobject',
            name='object_id',
            field=models.CharField(default='', max_length=36),
        ),
    ]
