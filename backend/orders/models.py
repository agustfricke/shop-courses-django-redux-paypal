from django.db import models
from users.models import User
from cursos.models import Curso


class Order(models.Model):
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    total_price     = models.DecimalField(max_digits=10, decimal_places=10, null=True, blank=True)
    created         = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    num_transaccion = models.CharField(max_length=250, null=True, blank=True)



class Orderitem(models.Model):
    user            = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    curso           = models.ForeignKey(Curso, on_delete=models.SET_NULL, null=True)
    order           = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    quantity        = models.IntegerField(null=True, blank=True, default=0)
    price           = models.DecimalField(max_digits=10, decimal_places=10, null=True, blank=True)


