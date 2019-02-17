from django.urls import include, path
from rest_framework import routers
from .views import OrderViewSet, ProductViewSet, ShopingCashViewSet, order_list, order_detail, check_created_shopping

router = routers.DefaultRouter()
router.register(r'order', OrderViewSet)
router.register(r'products', ProductViewSet)
router.register(r'shoping-cash', ShopingCashViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('orders-list/', order_list, name='order-list'),
    path('order-details/<str:pk>/', order_detail, name='order-details'),
    path('add-shoping-cash/', check_created_shopping, name='add-shoping-cash')
]