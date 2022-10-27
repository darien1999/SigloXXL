from rest_framework.viewsets import ModelViewSet

from orders.models import Order
from orders.api.serializers import OrderSerializer

class OrderApiViewSet(ModelViewSet):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
