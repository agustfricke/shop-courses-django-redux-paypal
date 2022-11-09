from django.urls import path
from . import views

urlpatterns = [
    
    # Auth
    path('login/', views.MyTokenObtainPairView.as_view()), 
    path('register/', views.register),

    # Features User
    path('put/', views.putUser),
    path('image/', views.uploadImage),
    path('profile/', views.getUserProfile),
    path('all/', views.getUsers),
    path('<int:pk>/', views.getSoloUser),

    # Admin
    path('update/<int:pk>/', views.updateUser),
    path('delete/<int:pk>/', views.deleteUser)
]

