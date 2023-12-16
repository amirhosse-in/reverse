# crackmes/views.py
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views import View
from .forms import CrackmeSubmissionForm, CommentForm, SolutionForm
from .models import Crackme, Comment, Solution
from django.contrib.auth.models import User
from django.http import FileResponse, HttpResponse
from django.shortcuts import get_object_or_404

@login_required
def submit_crackme(request):
    if request.method == 'POST':
        form = CrackmeSubmissionForm(request.POST, request.FILES)
        if form.is_valid():
            crackme = form.save(commit=False)
            crackme.user = request.user

            # Check if a Crackme with the same title already exists for the user
            existing_crackme = Crackme.objects.filter(user=crackme.user, title=crackme.title).first()
            if existing_crackme:
                # Handle the case where a Crackme with the same title already exists
                # You can redirect to an error page, show a message, etc.
                return HttpResponse("A Crackme with this title already exists for the user.")

            crackme.save()
            return redirect('/')
    else:
        form = CrackmeSubmissionForm()

    return render(request, 'submit_crackme.html', {'form': form})

def crackme_list_for_user(request, username):
    user = User.objects.get(username=username)
    crackmes = Crackme.objects.filter(user=user)
    return render(request, 'crackme_list_for_user.html', {'crackmes': crackmes, 'user': user})

def crackme_detail(request, username, title):
    user = request.user  # This assumes you have the authentication middleware enabled
    crackme = get_object_or_404(Crackme, user__username=username, title=title)
    comments = Comment.objects.filter(crackme=crackme)
    solutions = Solution.objects.filter(crackme=crackme)
    if request.method == 'POST' and user.is_authenticated:
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.user = user
            comment.crackme = crackme
            comment.save()
    else:
        comment_form = CommentForm()

    return render(request, 'crackme_detail.html', {'crackme': crackme, 'user': user, 'comments': comments, 'comment_form': comment_form, "solutions": solutions})

def download_binary(request, pk):
    crackme = get_object_or_404(Crackme, pk=pk)
    file_path = crackme.binary_file.path
    return FileResponse(open(file_path, 'rb'), content_type='application/octet-stream')

def download_binary(request, username, title):
    crackme = get_object_or_404(Crackme, user__username=username, title=title)

    if crackme.binary_file:
        response = FileResponse(crackme.binary_file)
        original_filename = crackme.binary_file.name.split('/')[-1]
        response['Content-Disposition'] = f'attachment; filename="{original_filename}"'
        return response
    else:
        # Handle the case where there is no binary file available
        # You can redirect to an error page or show a message
        return HttpResponse("No binary file available for download.")
    
def submit_solution(request, username, title):
    user = request.user
    crackme = get_object_or_404(Crackme, user__username=username, title=title)

    if request.method == 'POST' and user.is_authenticated:
        solution_form = SolutionForm(request.POST, request.FILES)
        if solution_form.is_valid():
            solution = solution_form.save(commit=False)
            solution.user = user
            solution.crackme = crackme
            solution.save()
            return redirect('crackmes:crackme_detail', username=username, title=title)
    else:
        solution_form = SolutionForm()

    return render(request, 'submit_solution.html', {'crackme': crackme, 'user': user, 'solution_form': solution_form})

def download_solution(request, username, title):
    solution = get_object_or_404(Solution, user__username=username, title=title)
    # Assuming 'binary_file' is the FileField in your Solution model
    response = FileResponse(solution.binary_file, content_type='application/force-download')
    response['Content-Disposition'] = f'attachment; filename="{solution.binary_file.name}"'
    return response

class CrackmeListView(View):
    template_name = 'crackme_list.html'  # Create this template

    def get(self, request):
        crackmes = Crackme.objects.all()
        context = {'crackmes': crackmes}
        return render(request, self.template_name, context)