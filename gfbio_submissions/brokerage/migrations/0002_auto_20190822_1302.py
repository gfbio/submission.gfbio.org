# Generated by Django 2.2.3 on 2019-08-22 13:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('brokerage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='siteconfiguration',
            name='pangaea_server',
            field=models.ForeignKey(help_text='Select which server and/or account this configuration should use to connect to Pangaea. Via this server, thetoken necessary to access Pangaea-Jira is obtained', on_delete=django.db.models.deletion.PROTECT, related_name='SiteConfiguration.pangaea_server+', to='brokerage.ResourceCredential'),
        ),
    ]
