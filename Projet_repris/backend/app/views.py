from django.shortcuts import render
from rest_framework import viewsets
from .models import Actualite, Programme
from .serializers import ActualiteSerializer, ProgrammeSerializer

def index(request):
	return render(request, 'index.html')

def direct(request):
	return render(request, 'direct.html')

def grille(request):
	return render(request, 'grille.html')

def actus(request):
	return render(request, 'actus.html')

# API ViewSets
class ActualiteViewSet(viewsets.ModelViewSet):
	queryset = Actualite.objects.all().order_by('-date_pub')
	serializer_class = ActualiteSerializer

class ProgrammeViewSet(viewsets.ModelViewSet):
	queryset = Programme.objects.all().order_by('jour', 'heure_debut')
	serializer_class = ProgrammeSerializer
