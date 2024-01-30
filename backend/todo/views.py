from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers
import hashlib
import json
from rest_framework import viewsets
from .serializers import TodoSerializer
# from .serializers import RankSerializer
from .models import Todo
from .models import Rank
from .models import Users
from .models import Solutions
from .models import Comments

def hashStr(str=''):
    return hashlib.sha256(str.encode()).hexdigest()

def modelToDict(m):
    return json.loads(serializers.serialize('json', m))

def makeResponse(ok = False, msg = '', data = None):
    return JsonResponse({'ok': ok, 'msg': msg, 'data': data})

# Create your views here.
# class RankView(viewsets.ModelViewSet):
#     serializer_class = RankSerializer
#     queryset = Rank.objects.all()

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

def register(request):
    username = request.GET.get('username')
    password = request.GET.get('password')
    mail = request.GET.get('mail')
    
    if Users.objects.filter(username=username):
        return makeResponse(msg='username already exist!')
    if Users.objects.filter(mail=mail):
        return makeResponse(msg='mail already exist!')
    
    user = Users.objects.create(username=username, password=hashStr(password), mail=mail)
    request.session['user_id'] = user.id

    return makeResponse(ok=True, msg='user registered!')

def getUser(request):
    if request.session.get('user_id'):
        user = Users.objects.get(id=request.session['user_id'])
        return makeResponse(ok=True, data={'username': user.username, 'id': user.id})
    return makeResponse(msg='user not logged in!')

def login(request):
    username = request.GET.get('username')
    password = request.GET.get('password')
    if request.session.get('user_id'):
        return makeResponse(ok=False, msg='user already logged in!')
    if username and password and Users.objects.filter(username=username, password=hashStr(password)):
        request.session['user_id'] = Users.objects.get(username=username).id
    else:
        return makeResponse(ok=False, msg='username or password was incorrect!')
    return makeResponse(ok=True, msg='user logged in successfuly! :)')

def logout(request):
    if request.session.get('user_id'):
        del request.session['user_id']
        return makeResponse(ok=True, msg='user logged out!')
    return makeResponse(ok= False, msg='user not logged in!')

def newRank(request):
    Author = Users.objects.get(id=request.session['user_id']).username
    Name = request.GET.get('Name')
    Language = request.GET.get('Language')
    Arch = request.GET.get('Arch')
    Difficulty = request.GET.get('Difficulty')
    Quality = request.GET.get('Quality')
    Platform = request.GET.get('Platform')
    fileName = request.GET.get('fileName')
    fileContent = request.GET.get('fileContent')
    rank = Rank.objects.create(
        Name=Name, 
        Author=Author, 
        Language=Language,
        Arch=Arch,
        Difficulty=Difficulty,
        Quality=Quality,
        Platform=Platform,
        fileName=fileName,
        fileContent=fileContent,
    )
    return makeResponse(ok=True, msg='rank created successfuly', data={'rankId': rank.id})

def ranks(request):
    ranks = Rank.objects.filter()
    Author = request.GET.get('Author')
    if Author:
        ranks &= Rank.objects.filter(Author=Author)
    Language = request.GET.get('Language')
    if Language:
        ranks &= Rank.objects.filter(Language=Language)
    Arch = request.GET.get('Arch')
    if Arch:
        ranks &= Rank.objects.filter(Arch=Arch)
    Difficulty = request.GET.get('Difficulty')
    if Difficulty:
        ranks &= Rank.objects.filter(Difficulty=Difficulty)
    Quality = request.GET.get('Quality')
    if Quality:
        ranks &= Rank.objects.filter(Quality=Quality)
    Platform = request.GET.get('Platform')
    if Platform:
        ranks &= Rank.objects.filter(Platform=Platform)
    created_at = request.GET.get('created_at')
    if created_at:
        ranks &= Rank.objects.filter(created_at=created_at)
    data = modelToDict(ranks)
    for i in range(len(ranks)):
        data[i]['fields']['solutions'] = Solutions.objects.filter(rankId=ranks[i].id).count()
        data[i]['fields']['comments'] = Comments.objects.filter(rankId=ranks[i].id).count()
    return makeResponse(ok=True, data=data)

def newSolution(request):
    userId = request.session['user_id']
    rankId = request.GET.get('rankId')
    fileName = request.GET.get('fileName')
    fileContent = request.GET.get('fileContent')
    description = request.GET.get('description')
    solution = Solutions.objects.create(
        userId = userId,
        rankId = rankId,
        fileName = fileName,
        fileContent = fileContent,
        description = description,
    )
    return makeResponse(ok=True, data={'solutionId': solution.id})

def solutions(request):
    solutions = Solutions.objects.filter()
    rankId = request.GET.get('rankId')
    if rankId:
        solutions &= Solutions.objects.filter(rankId=rankId)
    userId = request.GET.get('userId')
    if userId:
        solutions &= Solutions.objects.filter(userId=userId)
    return makeResponse(ok=True, data=modelToDict(solutions))

def newComment(request):
    userId = request.session['user_id']
    rankId = request.GET.get('rankId')
    description = request.GET.get('description')
    comment = Comments.objects.create(
        userId = userId,
        rankId = rankId,
        description = description,
    )
    return makeResponse(ok=True, data={'solutionId': comment.id})

def comments(request):
    comments = Comments.objects.filter()
    rankId = request.GET.get('rankId')
    if rankId:
        comments &= Comments.objects.filter(rankId=rankId)
    userId = request.GET.get('userId')
    if userId:
        comments &= Comments.objects.filter(userId=userId)
    return makeResponse(ok=True, data=modelToDict(comments))

def test(request):
    if Users.objects.filter(username='farbodhma'):
        return makeResponse(data=Users.objects.get(username='farbodhma').id)
    return makeResponse(data='user not found!')
