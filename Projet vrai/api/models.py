from django.db import models

# Create your models here.

class Category(models.Model):
	name = models.CharField(max_length=100) # Ex: Culture, Prières, Reportage, Témoignages

	def __str__(self):
		return self.name


class News(models.Model):
	title = models.CharField(max_length=200)
	content = models.TextField()
	category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
	is_headline = models.BooleanField(default=False) # À la une
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title


class Publication(models.Model):
	title = models.CharField(max_length=200)
	description = models.TextField()
	category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
	published_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

class Program(models.Model):
	title = models.CharField(max_length=200)
	description = models.TextField()
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	video_url = models.URLField(help_text="Lien vers le fichier vidéo ou le stream HLS")
	thumbnail = models.ImageField(upload_to='thumbnails/')
	is_live = models.BooleanField(default=False) # True si c'est le direct actuel
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title
