from rest_framework import serializers
from .models import Todo
from .models import Rank


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')


class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = ('id', 'Name', 'NameLink', 'Author', 'AuthorLink', 'Language', 'Arch', 'Difficulty',
                  'Quality', 'Platform', 'Date', 'Solution', 'Comments')
