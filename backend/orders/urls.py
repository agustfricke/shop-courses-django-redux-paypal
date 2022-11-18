from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.createOrder),

    path('url/', views.getURL),
    path('url/<int:pk>/', views.getURLSolo),
    path('createURL/', views.createURL),
    path('updateURL/<int:pk>/', views.updateURL),
    path('deleteURL/<int:pk>/', views.deleteURL),

    path('getOrders/', views.getOrders),
    path('<int:pk>/', views.getSoloOrder),
    path('getMyOrders/', views.getMyOrders),
]