# Generated by Django 4.1.3 on 2022-11-10 21:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='episodio',
            old_name='recurso',
            new_name='file',
        ),
    ]
