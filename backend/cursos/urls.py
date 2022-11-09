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

    ## Episodios
    path('createEpisodio/<int:pk>/', views.createEpisodio),
    path('uploadVideoEpisode/', views.uploadVideoEpisodio),
    path('updateEpisodio/<int:pk>/', views.updateEpisodio),

    # Comments 
    path('comment/<int:pk>/', views.createComment),

    # Reviews
    path('review/<int:pk>/', views.createCursoReview),

]