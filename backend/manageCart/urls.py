# urls.py
from django.urls import path
from .views import CartViewSet

urlpatterns = [
    path('carItems/', CartViewSet.as_view({'get': 'list'}), name='cart-list'),
    path('add/', CartViewSet.as_view({'post': 'add_to_cart'}), name='cart-add'),
    path('remove/<int:pk>/', CartViewSet.as_view({'delete': 'remove_from_cart'}), name='cart-remove'),
]
