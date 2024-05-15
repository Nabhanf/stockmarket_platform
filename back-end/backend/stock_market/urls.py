from django.contrib import admin
from django.urls import path,include
from stock_market import views
from .views import Customer_registration,Customer_login,fetch_intraday_stock_details
urlpatterns = [
    path('register/',Customer_registration.as_view(),name='register'),
    path('login/',Customer_login.as_view(),name='login'),
     path('api/intraday-stock-details/', fetch_intraday_stock_details, name='fetch_intraday_stock_details'),

]