# Generated by Django 3.0.6 on 2020-05-25 09:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('generic', '0006_auto_20200518_1606'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requestlog',
            name='type',
            field=models.CharField(choices=[('0', 'incoming'), ('1', 'outgoing'), ('2', 'jira')], default='0', help_text='We separate incoming and outgoing requests', max_length=1),
        ),
    ]