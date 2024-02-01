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

def test(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    return HttpResponse(username + ' ' + password)