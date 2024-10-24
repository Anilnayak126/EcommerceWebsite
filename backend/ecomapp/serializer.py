from rest_framework import serializers
from .models import Products
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class ProductsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Products
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):  # Corrected name here
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['_id', 'username', 'email', 'name', 'isAdmin']

    def get_name(self, obj):  # Corrected indentation
        firstname = obj.first_name
        lastname = obj.last_name
        name = firstname + " " + lastname  # Add space between first and last names
        return name

    def get__id(self, obj):  # Corrected indentation
        return obj.id

    def get_isAdmin(self, obj):  # Corrected indentation
        return obj.is_staff
        
class UserSerializerwithToken(UserSerializer):  # Corrected name here as well
    token = serializers.SerializerMethodField(read_only=True)
    
    class Meta: 
        model = User
        fields = ['_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
