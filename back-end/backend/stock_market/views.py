from django.shortcuts import render
from rest_framework.views import APIView
from .models import Customer_register
from .serializer import Register_serializer
from rest_framework.response import Response
from rest_framework import status
from alpha_vantage.timeseries import TimeSeries
from django.http import JsonResponse
import requests

class Customer_registration(APIView):

    def get(self, request):
        register=Customer_register.objects.all()
        serializer=Register_serializer(register, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer=Register_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response (serializer.data, status=status.HTTP_201_CREATED) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class Customer_login(APIView):
    def post(self, request):
        serializer=Register_serializer(data=request.data)
        if serializer.is_valid():
            user=serializer.validated_data.get('Username')
            password=serializer.validated_data.get('password')
            try:
                user=Customer_register.objects.get(Username=user,password=password)
                if user:
                    return Response({'message':'User logged in successfully'}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Invalid credentials'},status=status.HTTP_401_UNAUTHORIZED)
            except Customer_register.DoesNotExist:
                return Response({'error':'Invalid credentials'},status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        

API_key='WAZOJ7H0D1RA2RCN'

def fetch_intraday_stock_details(request):
    symbol = request.GET.get('symbol', 'IBM')  # Default symbol is IBM if not provided
    interval = request.GET.get('interval', '5min')  # Default interval is 5 minutes if not provided
    api_key = 'WAZOJ7H0D1RA2RCN'  # Replace with your Alpha Vantage API key
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=WAZOJ7H0D1RA2RCN'
    
    try:
        response = requests.get(url)
        data = response.json()
        return JsonResponse(data)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)