from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from ecomapp.models import Products
from .serializers import CartSerializer, CartItemSerializer

from django.shortcuts import get_object_or_404

class CartViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]

    def list(self, request):
        
        cart, created = Cart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def add_to_cart(self, request):
        
        cart, created = Cart.objects.get_or_create(user=request.user)

        
        product_id = request.data.get('product_id')
        product = get_object_or_404(Products,_id=product_id)
        quantity = request.data.get('quantity', 1)

        try:
           
            product = Products.objects.get(_id=product_id)
        except Products.DoesNotExist:
            return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

        
        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
        cart_item.quantity += quantity 
        cart_item.save()

        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def remove_from_cart(self, request, pk):
        try:
            
            cart = Cart.objects.get(user=request.user)
            
            cart_item = CartItem.objects.get(cart=cart, id=pk)
          
            cart_item.delete()
        except Cart.DoesNotExist:
            return Response({'error': 'Cart not found'}, status=status.HTTP_404_NOT_FOUND)
        except CartItem.DoesNotExist:
            return Response({'error': 'Cart item not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
