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
    return HttpResponse(username)