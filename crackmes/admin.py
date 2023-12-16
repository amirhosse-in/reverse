# crackme/admin.py
from django.contrib import admin
from .models import Crackme, Solution, Comment
from django.utils.html import format_html
from django.urls import reverse_lazy

class CrackmeAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'operating_system', 'hardness_level', 'display_binary_file']

    def display_binary_file(self, obj):
        # Use reverse_lazy for admin classes
        return format_html('<a href="{}" download>Download</a>', reverse_lazy('crackmes:download_binary', args=[obj.pk]))

admin.site.register(Crackme, CrackmeAdmin)
admin.site.register(Solution)
admin.site.register(Comment)
