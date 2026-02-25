from django.contrib import admin
from .models import Actualite, Programme

@admin.register(Actualite)
class ActualiteAdmin(admin.ModelAdmin):
    list_display = ('titre', 'date_pub')
    search_fields = ('titre',)

@admin.register(Programme)
class ProgrammeAdmin(admin.ModelAdmin):
    list_display = ('titre', 'jour', 'heure_debut', 'heure_fin')
    list_filter = ('jour',)