from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Products(models.Model):
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    productName = models.CharField(max_length=150)
    image = models.ImageField(null=True,blank=True)
    productBrand = models.CharField(max_length=150,null=True,blank=True)
    productCategory= models.CharField(max_length=100,null=True,blank=True)
    productInfo= models.TextField(null=True,blank=True)
    ratings = models.DecimalField(max_digits=8,decimal_places=2,null=True,blank=True)
    numReviews = models.IntegerField(null=True,blank=True,default=0)
    price = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    countInStock = models.IntegerField(null=True,blank=True,default=0)
    createdAt= models.DateField(auto_now_add=True)
    _id = models.AutoField(primary_key=True,editable=False)
    offer = models.BooleanField(default=False)

    def __str__(self):
        return self.productName
    

    