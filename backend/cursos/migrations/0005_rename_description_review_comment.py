# Generated by Django 3.2 on 2022-11-17 18:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0004_rename_foto_episodio_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='review',
            old_name='description',
            new_name='comment',
        ),
    ]