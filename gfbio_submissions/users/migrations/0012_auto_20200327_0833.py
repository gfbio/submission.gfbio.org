# Generated by Django 2.2.3 on 2020-03-27 08:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('generic', '0001_initial'),
        ('users', '0011_auto_20200217_1004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='site_configuration',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='configuration_users', to='generic.SiteConfiguration'),
        ),
    ]
