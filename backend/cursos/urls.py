from django.urls import path
from . import views

urlpatterns = [
    path('', views.searchCursos),
    path('last/', views.getLastCursos),
    path('curso/<int:pk>/', views.getCurso),
    path('create/', views.createCurso),
    path('image/', views.uploadImageCurso),
    path('update/<int:pk>/', views.updateCurso),
    path('delete/<int:pk>/', views.deleteCurso),

    # Episodios
    path('createEpisodio/<int:pk>/', views.createEpisodio),
    path('getEpisodio/<int:pk>/', views.getEpisodio),
    path('updateEpisodio/<int:pk>/', views.updateEpisodio),
    path('deleteEpisodio/<int:pk>/', views.deleteEpisodio),
    path('get/all/', views.getEpisodios),
    # Media Episodio
    path('uploadVideoEpisode/', views.uploadVideoEpisodio),
    path('uploadPicEpisodio/', views.uploadPicEpisodio),
    path('uploadFileEpisodio/', views.uploadFileEpisodio),

    # Comments 
    path('comment/<int:pk>/', views.createComment),

    # Reviews
    path('review/<int:pk>/', views.createCursoReview),

]