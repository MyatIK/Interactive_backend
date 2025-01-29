from django.urls import path,include
from rest_framework import routers
from CommentSection.views import CreateUserView,CreatePostViewSet,DeletePostView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views


urlpatterns= [
    path('user/register/', CreateUserView.as_view(), name="register"),
    path('token/', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh"),
    path('posts/', CreatePostViewSet.as_view(), name="post-list"),
    path('posts/delete/<int:pk>/', DeletePostView.as_view(), name='delete-post'),
    path('commentapi-auth/', include("rest_framework.urls")),

]