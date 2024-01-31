from django.urls import path
from .views import *

urlpatterns = [
    path('login/', login, name='login'),
    path('getUser/', getUser, name='getUser'),
    path('logout/', logout, name='logout'),
    path('test/', test, name='test'),
    path('register/', register, name='register'),
    path('getRank/', getRank, name='getRank'),
    path('newRank/', newRank, name='newRank'),
    path('ranks/', ranks, name='ranks'),
    path('newSolution/', newSolution, name='newSolution'),
    path('solutions/', solutions, name='solutions'),
    path('newComment/', newComment, name='newComment'),
    path('comments/', comments, name='comments'),
]