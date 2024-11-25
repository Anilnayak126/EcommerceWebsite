# serializers.py
from rest_framework import serializers
from .models import Cart, CartItem
from ecomapp.models import Products

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.ReadOnlyField(source='product.productName')  
    product_price = serializers.ReadOnlyField(source='product.price')      
    product_image = serializers.ImageField(source='product.image', read_only=True)  

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_name','product_image', 'product_price', 'quantity']

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['id', 'user', 'items']
