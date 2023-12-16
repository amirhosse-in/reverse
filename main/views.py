# main/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout


def home(request):
    return render(request, 'home.html', {'username': request.user.username, 'userid': request.user.id})

@login_required
def user_logout(request):
    logout(request)
    return redirect('login')  