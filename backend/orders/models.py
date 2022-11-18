from django.db import models
from users.models import User
from cursos.models import Curso


class Order(models.Model):
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    curso           = models.ForeignKey(Curso, on_delete=models.SET_NULL, null=True)
    created         = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    price           = models.CharField(max_length=250, null=True, blank=True)



class VimeoURL(models.Model):
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    url             = models.CharField(max_length=250, null=True, blank=True)
    title           = models.CharField(max_length=250, null=True, blank=True)


