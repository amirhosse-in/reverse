# authentication/urls.py

from django.urls import path
from .views import login_view, signup_view, UserProfileView

urlpatterns = [
    path('login/', login_view, name='login'),
    path('signup/', signup_view, name='signup'),
    path('profile/<str:username>/', UserProfileView.as_view(), name='user_profile'),
]
