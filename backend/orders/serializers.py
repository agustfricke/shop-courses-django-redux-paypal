from rest_framework import serializers
from .models import Order, Orderitem
from users.serializers import UserSerializer



class OrderitemSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)
    curso = serializers.CharField(source='curso.title', read_only=True)


    class Meta:
        model = Orderitem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    order_items = serializers.SerializerMethodField(read_only=True)
    user = serializers.CharField(source='user.user_name', read_only=True)


    class Meta:
        model = Order
        fields = '__all__'

    def get_order_items(self, obj):
        order_items = obj.orderitem_set.all()
        serializer = OrderitemSerializer(order_items, many=True)
        return serializer.data
