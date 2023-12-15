# views.py 

from django.shortcuts import render, get_object_or_404, redirect
from .models import PrivateChat, Message
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

from django.shortcuts import render, get_object_or_404, redirect
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from .models import PrivateChat, Message

@login_required
def private_chat(request, chat_id):
    chat = get_object_or_404(PrivateChat, id=chat_id, user1=request.user)
    messages = Message.objects.filter(chat=chat).order_by('timestamp')

    return render(request, 'private_chat.html', {'chat': chat, 'messages': messages})

@login_required
def send_message(request, chat_id):
    if request.method == 'POST':
        chat = get_object_or_404(PrivateChat, id=chat_id, user1=request.user)
        content = request.POST.get('content', '')

        if content:
            message = Message.objects.create(chat=chat, sender=request.user, content=content)
            data = {
                'id': message.id,
                'sender': message.sender.username,
                'content': message.content,
                'timestamp': message.timestamp.strftime('%Y-%m-%d %H:%M:%S')
            }

            return JsonResponse(data)

    return redirect('private_chat', chat_id=chat_id)

@login_required
def get_messages(request, chat_id, last_message_id):
    chat = get_object_or_404(PrivateChat, id=chat_id, user1=request.user)
    messages = Message.objects.filter(chat=chat, id__gt=last_message_id).order_by('timestamp')

    data = [{'id': message.id, 'sender': message.sender.username, 'content': message.content, 'timestamp': message.timestamp.strftime('%Y-%m-%d %H:%M:%S')} for message in messages]

    return JsonResponse({'messages': data})