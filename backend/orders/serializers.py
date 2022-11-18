from rest_framework import serializers
from .models import Order, VimeoURL
from users.serializers import UserSerializer


class VimeoURLSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)


    class Meta:
        model = VimeoURL
        fields = '__all__'



class OrderSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)


    class Meta:
        model = Order
        fields = '__all__'


