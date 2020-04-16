# Generated by Django 2.2.3 on 2020-03-20 14:35

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import gfbio_submissions.generic.fields
import model_utils.fields
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('generic', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='resourcecredential',
            name='created',
            field=model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created'),
        ),
        migrations.AddField(
            model_name='resourcecredential',
            name='modified',
            field=model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified'),
        ),
        migrations.AddField(
            model_name='siteconfiguration',
            name='created',
            field=model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created'),
        ),
        migrations.AddField(
            model_name='siteconfiguration',
            name='modified',
            field=model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified'),
        ),
        migrations.CreateModel(
            name='RequestLog',
            fields=[
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('request_id', models.UUIDField(default=uuid.uuid4, help_text='Primary-key for RequestLog entries', primary_key=True, serialize=False)),
                ('type', models.CharField(choices=[('0', 'incoming'), ('1', 'outgoing')], default='0', help_text='We separate incoming and outgoing requests', max_length=1)),
                ('url', models.TextField(blank=True, help_text='Target url of this Request')),
                ('data', models.TextField(blank=True, help_text='Any kind of payload that comes with with this request (if available)')),
                ('site_user', models.CharField(help_text='A user of a site registered in our System. E.g. user=joe (this value ...) at site=GFBio.org', max_length=72)),
                ('submission_id', models.UUIDField(blank=True, help_text='The submission this request is associated with', null=True)),
                ('response_status', models.IntegerField(blank=True, help_text='The response-code we send if this is an incoming request. Otherwise the status sent by request-target', null=True)),
                ('response_content', models.TextField(blank=True, help_text='The content we send if this is an incoming request. Otherwise the content sent by request-target')),
                ('request_details', gfbio_submissions.generic.fields.JsonDictField(default=dict, help_text='This may contain meta-information regarding this request')),
                ('triggered_by', models.ForeignKey(blank=True, help_text='This will be null for incoming requests Otherwise (outgoing request) it will show the id of the incoming request, that has triggered this request', null=True, on_delete=django.db.models.deletion.SET_NULL, to='generic.RequestLog')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]