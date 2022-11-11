from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.addOrderItem),
    path('<int:pk>/', views.getSoloOrder),
    path('getMyOrders/', views.getMyOrders),
]