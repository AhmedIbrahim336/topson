from django.urls import path, include
from .views import UserView, Login

urlpatterns = [
    path('', UserView.as_view(), name='user'),
    path('login/', Login.as_view(), name='login')
]