from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api/actualites', views.ActualiteViewSet)
router.register(r'api/programmes', views.ProgrammeViewSet)

urlpatterns = [
	path('', views.index, name='index'),
	path('direct/', views.direct, name='direct'),
	path('grille/', views.grille, name='grille'),
	path('actus/', views.actus, name='actus'),
	path('', include(router.urls)),
]
