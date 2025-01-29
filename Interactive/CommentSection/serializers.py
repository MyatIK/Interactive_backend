from rest_framework import serializers
from .models import Post
from django.utils import timezone
from django.contrib.auth.models import User


class PostSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username', read_only=True)
    class Meta:
        model=Post
        fields= ['id','newPost', 'posted_since','author']
        extra_kwargs= {'author': {'read_only': True}}



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user