from rest_framework import serializers
from .models import Customer_register

class Register_serializer(serializers.ModelSerializer):
    class Meta:
        model=Customer_register
        fields="__all__"