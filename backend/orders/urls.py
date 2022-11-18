from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.createOrder),
    path('url/', views.getURL),
    path('<int:pk>/', views.getSoloOrder),
    path('getMyOrders/', views.getMyOrders),
]