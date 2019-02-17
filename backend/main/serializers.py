from rest_framework import serializers

from .models import Product, Order, ShopingCash


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'name', 'price')


class OrderSerializer(serializers.ModelSerializer):

    shopping_cash = serializers.PrimaryKeyRelatedField(many=True, queryset=ShopingCash.objects.all())

    class Meta:
        model = Order
        fields = ('id', 'date', 'shopping_cash', 'shopping_cash')


class ShopingCashSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShopingCash
        fields = ('id', 'product', 'order')