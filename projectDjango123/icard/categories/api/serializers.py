from calendar import c
from dataclasses import field
from pyexpat import model
from rest_framework.serializers import ModelSerializer
from categories.models import Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'image']
