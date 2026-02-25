from django.db import models

class Actualite(models.Model):
	titre = models.CharField(max_length=200)
	contenu = models.TextField()
	date_pub = models.DateTimeField(auto_now_add=True)

class Programme(models.Model):
	titre = models.CharField(max_length=200)
	description = models.TextField()
	heure_debut = models.TimeField()
	heure_fin = models.TimeField()
	jour = models.CharField(max_length=20)
