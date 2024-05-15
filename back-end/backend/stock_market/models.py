from django.db import models

class Customer_register(models.Model):
    Username=models.CharField( max_length=100)
    password=models.CharField(max_length=50)
    class Meta:
        db_table='Customer_register'
        
        

