from django.core.exceptions import ObjectDoesNotExist
from rest_framework import viewsets, status
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response

from .models import Order, Product, ShopingCash
from .serializers import OrderSerializer, ShopingCashSerializer, ProductSerializer
from rest_framework.decorators import api_view, renderer_classes


# from rest_framework import generics


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-date')
    serializer_class = OrderSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ShopingCashViewSet(viewsets.ModelViewSet):
    queryset = ShopingCash.objects.all()
    serializer_class = ShopingCashSerializer



@api_view(['GET'])
@renderer_classes((JSONRenderer,))
def order_list(request):
    if request.method == 'GET':
        respons = []
        for order in Order.objects.all():
            dict_order = {}
            dict_order['id'] = order.id
            dict_order['date'] = order.date
            dict_order['products'] = []
            dict_order['sum_price'] = 0
            for order_row in ShopingCash.objects.select_related('product').filter(order__id=order.id):
                dict_order['products'].append({'id': order_row.product.id, 'name': order_row.product.name,
                                               'price': order_row.product.price})
                dict_order['sum_price'] += order_row.product.price
            respons.append(dict_order)
        return Response({'result': respons})


@api_view(['POST'])
@renderer_classes((JSONRenderer,))
def check_created_shopping(request):
    if request.method == "POST":
        product = request.POST.get('product')
        order = request.POST.get('order')
        try:
            shopping = ShopingCash.objects.get(product__id=product, order__id=order)
        except ObjectDoesNotExist:
            shopping = ShopingCash(product_id=product, order_id=order)
            shopping.save()
            return Response({'status': 'success', 'data': {'id': shopping.id, 'name': shopping.product.name,
                                                           'product_id': shopping.product.id, 'price': shopping.product.price}})
        return Response({'text': 'bad request'}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@renderer_classes((JSONRenderer,))
def order_detail(request, pk):
    try:
        orders = ShopingCash.objects.filter(order=pk)
    except ShopingCash.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        products = []
        for i in orders:
            products.append({'id': i.id, 'product_id': i.product.id, 'name': i.product.name, 'price': i.product.price})
        return Response({'data': products})
