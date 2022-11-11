from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils import timezone
from rest_framework import status

from .models import Curso, Review, Episodio, Comment
from .serializers import EpisodioSerializer, CursoSerializer


@api_view(['GET'])
def searchCursos(request):
    query = request.query_params.get('keysearch')
    if query == None:
        query = ''
    cursos = Curso.objects.filter(title__icontains=query)
    serializer = CursoSerializer(cursos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getLastCursos(request):
    cursos = Curso.objects.filter().order_by('-created')
    serializer = CursoSerializer(cursos, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getCurso(request, pk):
    curso = Curso.objects.get(id=pk)
    serializer = CursoSerializer(curso, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCurso(request):
    user = request.user
    curso = Curso.objects.create(
        user=user,
        title='Titulo',
        price=0,
        category='df',
        description='dfdf',
        wallet='dfdf',
    )
    serializer = CursoSerializer(curso, many=False)
    return Response(serializer.data)




@api_view(['POST'])
def uploadImageCurso(request):
    data = request.data
    curso_id = data['curso_id']
    curso = Curso.objects.get(id=curso_id)

    curso.image = request.FILES.get('image')
    curso.save()

    return Response('Image was uploaded')
    


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateCurso(request, pk):
    data = request.data
    curso = Curso.objects.get(id=pk)
    if curso.user == request.user:
        curso.title = data['title']
        curso.category = data['category']
        curso.description = data['description']
        curso.price = data['price']
        curso.wallet = data['wallet']
        curso.save()
        serializer = CursoSerializer(curso, many=False)
        return Response(serializer.data)  
    else:
        return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)

    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteCurso(request, pk):
    curso = Curso.objects.get(id=pk)
    if curso.user == request.user:
        curso.delete()
        return Response('Curso was deleted')
    else:
        return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)


# Epidodio stuff

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createEpisodio(request, pk):
    curso = Curso.objects.get(id=pk)
    user = request.user
    data = request.data
    if curso.user == request.user:

        episodio = Episodio.objects.create(
            user=user,
            curso=curso,
            title=data['title'],
            description=data['description'],

        )
        episodios = curso.episodio_set.all()
        curso.save()
        return Response('Epsodio subido!!')
    else:
        return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
def getEpisodios(request):
    episodio = Episodio.objects.all()
    serializer = EpisodioSerializer(episodio, many=True)
    return Response(serializer.data)

    
@api_view(['POST'])
def uploadVideoEpisodio(request):
    data = request.data
    episodio_id = data['episodio_id']
    episodio = Episodio.objects.get(id=episodio_id)
    episodio.video = request.FILES.get('video')
    episodio.save()
    return Response('Video was uploaded')

@api_view(['POST'])
def uploadPicEpisodio(request):
    data = request.data
    episodio_id = data['episodio_id']
    episodio = Episodio.objects.get(id=episodio_id)
    episodio.image = request.FILES.get('image')
    episodio.save()
    return Response('Image was uploaded')

@api_view(['POST'])
def uploadFileEpisodio(request):
    data = request.data
    episodio_id = data['episodio_id']
    episodio = Episodio.objects.get(id=episodio_id)
    episodio.file = request.FILES.get('file')
    episodio.save()
    return Response('File was uploaded')


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateEpisodio(request, pk):
    data = request.data
    episodio = Episodio.objects.get(id=pk)
    if episodio.user == request.user:
        episodio.title = data['title']
        episodio.description = data['description']
        episodio.save()
        serializer = EpisodioSerializer(episodio, many=False)
        return Response(serializer.data)  
    else:
        return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteEpisodio(request, pk):
    episodio = Episodio.objects.get(id=pk)
    if episodio.user == request.user:
        episodio.delete()
        return Response('Episodio was deleted')
    else:
        return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
def getEpisodio(request, pk):
    epi = Episodio.objects.get(id=pk)
    serializer = EpisodioSerializer(epi, many=False)
    return Response(serializer.data)


# Comment
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createComment(request, pk):
    episodio = Episodio.objects.get(id=pk)
    user = request.user
    data = request.data
    comment = Comment.objects.create(
        user=user,
        episodio=episodio,
        description=data['description'],
        )
    comments = episodio.comment_set.all()
    episodio.save()
    return Response('Comment subido!!')


# Reviews

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createCursoReview(request, pk):
    curso = Curso.objects.get(id=pk)
    user = request.user
    data = request.data

    already_exists = curso.review_set.filter(user=user).exists()
    if already_exists:
        content = {'detail': 'Curso already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    elif data['rating'] == 0:
        content = {'detail': 'Select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    else:
        review = Review.objects.create(
            user=user,
            curso=curso,
            rating=data['rating'],
            description=data['description']
        )

        reviews = curso.review_set.all()
        curso.num_reviews = len(reviews)

        total = 0
        for num in reviews:
            total += num.rating

        curso.rating = total / len(reviews)
        curso.save()

        return Response('Review added')