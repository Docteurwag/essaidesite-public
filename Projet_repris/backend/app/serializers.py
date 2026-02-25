from rest_framework import serializers
from .models import Actualite, Programme

class ActualiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actualite
        fields = '__all__'

class ProgrammeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programme
        fields = '__all__'