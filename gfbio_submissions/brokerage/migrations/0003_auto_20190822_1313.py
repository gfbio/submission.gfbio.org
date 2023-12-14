# Generated by Django 2.2.3 on 2019-08-22 13:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("brokerage", "0002_auto_20190822_1302"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="siteconfiguration",
            name="pangaea_server",
        ),
        migrations.AddField(
            model_name="siteconfiguration",
            name="pangaea_jira_server",
            field=models.ForeignKey(
                blank=True,
                help_text="Select which server and/or account this configuration should use to connect to Pangaea-Jira. This Serverrepresents the actual jira-instance of Pangaea",
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                related_name="SiteConfiguration.pangaea_jira_server+",
                to="brokerage.ResourceCredential",
            ),
        ),
        migrations.AddField(
            model_name="siteconfiguration",
            name="pangaea_token_server",
            field=models.ForeignKey(
                blank=True,
                help_text="Select which server and/or account this configuration should use to connect to Pangaea token server. Via this server, thetoken necessary to access Pangaea-Jira is obtained",
                null=True,
                on_delete=django.db.models.deletion.PROTECT,
                related_name="SiteConfiguration.pangaea_token_server+",
                to="brokerage.ResourceCredential",
            ),
        ),
    ]
