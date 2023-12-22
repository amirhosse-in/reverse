from django.contrib import admin
from .models import Todo
from .models import Rank


class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')


class RankAdmin(admin.ModelAdmin):
    list_display = ('Name', 'NameLink', 'Author', 'AuthorLink', 'Language', 'Arch', 'Difficulty',
                    'Quality', 'Platform', 'Date', 'Solution', 'Comments')

# Register your models here.


admin.site.register(Todo, TodoAdmin)
admin.site.register(Rank)
