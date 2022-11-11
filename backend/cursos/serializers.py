from rest_framework import serializers
from .models import Curso, Review, Episodio, Comment


    
class CommentSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'


class EpisodioSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)
    comments = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Episodio
        fields = '__all__'

    def get_comments(self, obj):
        comments = obj.comment_set.all()
        serializer = CommentSerializer(comments, many=True)
        return serializer.data



class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

    
class CursoSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.user_name', read_only=True)
    reviews = serializers.SerializerMethodField(read_only=True)
    episodios = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Curso
        fields = '__all__'

    def get_reviews(self, obj):
        reviews = obj.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return serializer.data

    def get_episodios(self, obj):
        episodio = obj.episodio_set.all()
        serializer = EpisodioSerializer(episodio, many=True)
        return serializer.data