# authentication/views.py

from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from .forms import *
from django.views import View
from crackmes.models import Crackme, Solution, Comment

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('/')
    else:
        form = AuthenticationForm(request)
    return render(request, 'login.html', {'form': form})

def signup_view(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})

class UserProfileView(View):
    template_name = 'user_profile.html'  # Create this template

    def get(self, request, username):
        user = User.objects.get(username=username)
        crackmes = Crackme.objects.filter(user=user)
        solutions = Solution.objects.filter(user=user)
        comments = Comment.objects.filter(user=user)

        context = {
            'user': user,
            'crackmes': crackmes,
            'solutions': solutions,
            'comments': comments,
        }

        return render(request, self.template_name, context)