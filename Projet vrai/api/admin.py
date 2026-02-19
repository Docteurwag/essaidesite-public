from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Program

admin.site.register(Category)
admin.site.register(Program)

# Personnalisation du header admin
admin.site.site_header = "Lumen Christi TV"
admin.site.site_title = "Lumen Christi TV Admin"
admin.site.index_title = "Gestion de la chaîne Lumen Christi TV"
 
# Injection du CSS personnalisé pour le logo
def custom_admin_css():
	return format_html('<link rel="stylesheet" type="text/css" href="/static/admin_custom.css">')
	# Suppression de la surcharge each_context (récursion)
