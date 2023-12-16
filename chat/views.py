# chat/views.py
import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from .models import Message
from django.db.models import Q
from django.contrib.auth.models import User

@login_required
def chat(request, username):
    receiver = User.objects.get(username=username)
    messages = Message.objects.filter(
        (Q(sender=request.user) & Q(receiver=receiver)) |
        (Q(sender=receiver) & Q(receiver=request.user))
    ).order_by('timestamp')

    return render(request, 'chat.html', {'messages': messages, 'receiver': receiver})

@csrf_exempt
@login_required
def send_message(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        text = data.get('text', '')
        receiver_username = data.get('receiver_username', '')
        print(f"1: {receiver_username}")

        # Now you can proceed with creating the message
        receiver = User.objects.get(username=receiver_username)
        message = Message.objects.create(sender=request.user, receiver=receiver, text=text)
        
        return JsonResponse({'status': 'success'})
    
    return JsonResponse({'status': 'error'})

def get_messages(request, username):
    receiver = User.objects.get(username=username)
    messages = Message.objects.filter(
        (Q(sender=request.user) & Q(receiver=receiver)) |
        (Q(sender=receiver) & Q(receiver=request.user))
    ).order_by('timestamp')
    messages_data = [{'sender': message.sender.username, 'timestamp': message.timestamp, 'text': message.text}
                     for message in messages]
    return JsonResponse({'messages': messages_data})
