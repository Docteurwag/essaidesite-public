
import os
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
	TokenObtainPairView,
	TokenRefreshView,
)

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', include('app.urls')),
	path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
	path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# Ajout pour servir les fichiers statiques en développement
urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, 'app', 'static'))
