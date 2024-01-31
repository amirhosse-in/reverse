from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import TodoSerializer
from .serializers import RankSerializer
from .models import Todo
from .models import Rank


# Create your views here.
class RankView(viewsets.ModelViewSet):
    serializer_class = RankSerializer
    queryset = Rank.objects.all()


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

def login(request):
    username = request.GET.get('username')
    password = request.GET.get('password')
    if request.session['user_id']:
        return HttpResponse('user already logged in!')
    if username == 'sinamp' and password == 'sina1383':
        request.session['user_id'] = 2
    else:
        return HttpResponse('username or password was incorrect!')
    return HttpResponse('user logged in successfuly! :)')