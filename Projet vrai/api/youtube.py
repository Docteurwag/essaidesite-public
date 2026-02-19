import requests
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class YoutubePlaylistsView(APIView):
    def get(self, request):
        channel_id = 'VOTRE_CHANNEL_ID'  # Remplacez par l'ID de la chaîne
        api_key = 'VOTRE_API_KEY'        # Remplacez par votre clé API
        url = f'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId={channel_id}&key={api_key}&maxResults=10'
        r = requests.get(url)
        if r.status_code == 200:
            data = r.json()
            playlists = [
                {
                    'title': item['snippet']['title'],
                    'description': item['snippet']['description'],
                    'thumbnail': item['snippet']['thumbnails']['default']['url'],
                    'playlistId': item['id']
                }
                for item in data.get('items', [])
            ]
            return Response(playlists)
        return Response({'error': 'Erreur lors de la récupération'}, status=status.HTTP_502_BAD_GATEWAY)
