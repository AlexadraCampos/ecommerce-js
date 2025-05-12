from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import  ProdutoViewSet, ServicoViewSet

router = DefaultRouter()
router.register(r'produtos', ProdutoViewSet )
router.register(r'servicos', ServicoViewSet )

urlpatterns = [
    path('', include(router.urls)),
]
