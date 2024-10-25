from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes

from .serializer import ProductsSerializer,UserSerializer,UserSerializerwithToken
from .models import Products

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from django.contrib.auth.models import User

from django.contrib.auth.hashers import make_password
from rest_framework import status

# emails and genearte tokens 
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from .utils import TokenGenerator,generate_token
from django.utils.encoding import force_bytes,force_text,DjangoUnicodeDecodeError
from django.core.mail import EmailMessage
from django.conf import settings
from django.views.generic import View


from django.urls import reverse


from rest_framework.pagination import PageNumberPagination
from smtplib import SMTPServerDisconnected,SMTPException


# Create your views here.
@api_view(["GET"])
def test(request):

    return JsonResponse("jay jaga",safe=False)

@api_view(['GET'])
def getProducts(request):

    data = Products.objects.all()
    serializer = ProductsSerializer(data,many=True)

    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request,pk):

    data = Products.objects.get(_id = pk)
    serializer = ProductsSerializer(data,many=False)

    return Response(serializer.data)



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
     def validate(self, attrs):
        data = super().validate(attrs)
        serializer=UserSerializerwithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v       
        return data
    


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user =request.user
    serializer = UserSerializer(user,many=False)

    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUserProfiles(request):
    user =User.objects.all()
    serializer = UserSerializer(user,many=True)

    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        # Create user with hashed password
        user = User.objects.create(
            first_name=data['fname'],
            last_name=data['lname'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password']),
            is_active = True 
        )

        user.save()

        '''
        # Email Feature
        email_subject = "Activate Your Account"
        message = render_to_string(
            "activate.html",
            {
            'user':user,
            "domain":'127.0.0.1:8000',
            "uid":urlsafe_base64_encode(force_bytes(user.pk)),
            "token": generate_token.make_token(user)
            }
        )

        email_message = EmailMessage(email_subject,message,settings.EMAIL_HOST_USER,[data['email']])
        email_message.send()
        '''
        # Serialize user data with token
        serializer = UserSerializerwithToken(user, many=False)

        return Response(serializer.data)
    except Exception as e:
        print(e)
        # Handle user creation error
        message = {'details':e}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


class ActivateAccountView(View):

    def get(self,request,uidb64,token):

        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user =User.objects.get(pk=uid)
        except Exception as identifier:
            user =None

        if user is not None and generate_token.check_token(user,token):
            user.is_active = True
            user.save()
            return render(request,'activatesucces.html')
        else:
            return render(request,'activatefail.html')


