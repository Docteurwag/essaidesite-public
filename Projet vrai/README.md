# Backend Django pour application mobile

Ce projet fournit une API REST pour une application mobile (iOS/Android).

## Installation

1. Assurez-vous que Python 3 et pip sont installés.
2. Installez les dépendances :
   ```sh
   python -m pip install django djangorestframework
   ```
3. Initialisez le projet Django :
   ```sh
   python -m django startproject backend .
   python manage.py migrate
   python manage.py startapp api
   ```

## Lancer le serveur

```sh
python manage.py runserver
```

## Structure du projet
- backend/ : configuration Django
- api/ : endpoints API REST

## Accès API
L'API REST sera accessible via `/api/`.

## Pour aller plus loin
- Ajouter vos modèles dans `api/models.py`
- Créer vos vues dans `api/views.py`
- Configurer les routes dans `api/urls.py`

---

Pour toute question, contactez le développeur.
