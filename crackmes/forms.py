# forms.py
from django import forms
from .models import Crackme, Comment, Solution

class CrackmeSubmissionForm(forms.ModelForm):
    class Meta:
        model = Crackme
        fields = ['title', 'description', 'operating_system', 'hardness_level', 'binary_file']

    def clean_title(self):
        title = self.cleaned_data['title']
        user = self.cleaned_data.get('user')

        if user and Crackme.objects.filter(user=user, title=title).exists():
            raise forms.ValidationError("A Crackme with this title already exists for the user.")
        return title


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['text']

    def __init__(self, *args, **kwargs):
        super(CommentForm, self).__init__(*args, **kwargs)
        self.fields['text'].widget = forms.Textarea(attrs={'rows': 3, 'placeholder': 'Enter your comment here...'})

class SolutionForm(forms.ModelForm):
    class Meta:
        model = Solution
        fields = ['title', 'description', 'binary_file']