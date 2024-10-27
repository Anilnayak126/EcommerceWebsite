# serializers.py
from rest_framework import serializers
from .models import Cart, CartItem
from ecomapp.models import Products

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source='product.productName')  # Correctly referencing productName
    product_price = serializers.ReadOnlyField(source='product.price')        # Correctly referencing price

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_name', 'product_price', 'quantity']

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'user', 'items']
