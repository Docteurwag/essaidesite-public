from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ProgramViewSet, NewsViewSet, PublicationViewSet, CategoryViewSet
from .youtube import YoutubePlaylistsView

router = DefaultRouter()
router.register(r'programs', ProgramViewSet)
router.register(r'news', NewsViewSet)
router.register(r'publications', PublicationViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('youtube/playlists/', YoutubePlaylistsView.as_view(), name='youtube-playlists'),
]
