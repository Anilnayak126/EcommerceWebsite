from django.urls import path,include
from  ecomapp import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('',views.test,name="routes"),
    path('product/',views.getProducts,name="product"),
    path('product/offers/', views.getOfferProducts, name='get-offer-products'),
    path('s_product/<str:pk>',views.getProduct,name="s_product"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/',views.getUserProfile,name="getProfile"),
    path('users/profiles/',views.getUserProfiles,name='Getprofiles'),
    path('users/register/',views.registerUser,name='userRegister'), 
    path('activate/<uidb64>/<token>',views.ActivateAccountView.as_view(),name='activate'),
    path('paypal/payment/',views.PayPalPayment.as_view(),name='paypal_payment')
    
]
