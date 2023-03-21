from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework import routers
from django.conf.urls import include
from .views import UserViewSet, VideoView

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('videos', VideoView)

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', include(router.urls)),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
