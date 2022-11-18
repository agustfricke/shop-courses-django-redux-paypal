# Generated by Django 3.2 on 2022-11-18 00:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0005_rename_description_review_comment'),
        ('orders', '0002_vimeourl'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='total_price',
            new_name='price',
        ),
        migrations.RemoveField(
            model_name='order',
            name='num_transaccion',
        ),
        migrations.AddField(
            model_name='order',
            name='curso',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cursos.curso'),
        ),
        migrations.DeleteModel(
            name='Orderitem',
        ),
    ]