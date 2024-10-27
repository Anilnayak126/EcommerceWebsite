from rest_framework import serializers
from .models import Products
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class ProductsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Products
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):  
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['_id', 'username', 'email', 'name', 'isAdmin']

    def get_name(self, obj):  
        firstname = obj.first_name
        lastname = obj.last_name
        name = firstname + " " + lastname 

        return name

    def get__id(self, obj): 
        return obj.id

    def get_isAdmin(self, obj):  
        return obj.is_staff
        
class UserSerializerwithToken(UserSerializer):  
    token = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    
    class Meta: 
        model = User
        fields = ['_id', 'username', 'email', 'name', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

