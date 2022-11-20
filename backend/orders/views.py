from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime

from .serializers import OrderSerializer, VimeoURLSerializer

from cursos.models import Curso
from cursos.serializers import CursoSerializer
from .models import Order, VimeoURL


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getURL(request):
    url = VimeoURL.objects.all()
    serializer = VimeoURLSerializer(url, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getURLSolo(request, pk):
    url = VimeoURL.objects.get(id=pk)
    serializer = VimeoURLSerializer(url, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOrders(request):
    orders = Order.objects.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAdminUser])
def createURL(request):
    user = request.user
    data = request.data
    vimeo = VimeoURL.objects.create(
            user=user,
            title=data['title'],
            url=data['url'],

        )
    serializer = VimeoURLSerializer(vimeo, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateURL(request, pk):
    data = request.data
    vimeo = VimeoURL.objects.get(id=pk)
    vimeo.title = data['title']
    vimeo.url = data['url']
    vimeo.save()
    serializer = VimeoURLSerializer(vimeo, many=False)
    return Response(serializer.data)  


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteURL(request, pk):
    vimeo = VimeoURL.objects.get(id=pk)
    vimeo.delete()
    return Response('URL was deleted')




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createOrder(request):
    user = request.user
    data = request.data

    order = Order.objects.create(
            user=user,
            price='78'
        )

    serializer = OrderSerializer(order, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoloOrder(request, pk):
    user = request.user
    try:
        order = Order.objects.get(id=pk)
        if order.user == user:
            serializer = OrderSerializer(order, many=False)
            return Response(serializer.data)
        else:
            Response({'detail': 'No access to view orders'},
                     status=status.HTTP_401_UNAUTHORIZED)
    except:
        return Response({'detail': 'Order does not exist'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyOrders(request):
    user = request.user
    orders = user.order_set.all()
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

