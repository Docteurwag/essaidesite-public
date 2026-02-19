from django.shortcuts import render
from rest_framework import viewsets
from .models import Program, News, Publication, Category
from .serializers import ProgramSerializer, NewsSerializer, PublicationSerializer, CategorySerializer

class ProgramViewSet(viewsets.ModelViewSet):
	queryset = Program.objects.all().order_by('-created_at')
	serializer_class = ProgramSerializer

class NewsViewSet(viewsets.ModelViewSet):
	queryset = News.objects.all().order_by('-created_at')
	serializer_class = NewsSerializer

class PublicationViewSet(viewsets.ModelViewSet):
	queryset = Publication.objects.all().order_by('-published_at')
	serializer_class = PublicationSerializer

class CategoryViewSet(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
from django.shortcuts import render

# Create your views here.
