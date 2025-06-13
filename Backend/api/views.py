from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response
from .models import *
import uuid

# Create your views here.

# def home(request):
#     return HttpResponse("This is the home page!")

class ProductViewset(viewsets.ViewSet): 
    permissions_class = [permissions.AllowAny]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request):
        queryset = Product.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        Product = self.queryset.get(pk=pk)
        serializer = self.serializer_class(Product)
        return Response(serializer.data)

    def update(self, request, pk=None):
        Product = self.queryset.get(pk=pk)
        serializer = self.serializer_class(Product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        Product = self.queryset.get(pk=pk)
        Product.delete()
        return Response(status=204)

###########Working

class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

    def list(self, request):
        queryset = Orders.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        Orders = self.queryset.get(pk=pk)
        serializer = self.serializer_class(Orders)
        return Response(serializer.data)

    def update(self, request, pk=None):
        Orders = self.queryset.get(pk=pk)
        serializer = self.serializer_class(Orders, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        Orders = self.queryset.get(pk=pk)
        Orders.delete()
        return Response(status=204)

#############################
##Test##

# class CheckoutView(APIView):
#     def post(self, request, *args, **kwargs):
#         data = request.data

#         # Get the list of products with their quantities from the request
#         product_data = data.get('products', [])
        
#         if not product_data:
#             return Response({"error": "No products selected"}, status=status.HTTP_400_BAD_REQUEST)

#         # Generate a unique order number
#         order_number = f"ORD-{str(uuid.uuid4().int)[:6]}"  # Or use any logic you prefer

#         # Create the order in the database
#         order = Orders.objects.create(
#             order_number=order_number,
#             name=data['name'],
#             phone=data['phone'],
#             email=data['email'],
#             note=data.get('note', ''),
#             total_price=0  # We will update this later
#         )

#         # Create OrderProduct instances for each product and add to order
#         total_price = 0
#         for item in product_data:
#             product = Product.objects.get(id=item['product_id'])
#             quantity = item['quantity']
#             price = product.price * quantity
#             total_price += price

#             # Create an order item (OrderProduct)
#             OrderProduct.objects.create(
#                 order=order,
#                 product=product,
#                 quantity=quantity,
#                 price=price
#             )

#         # Update the total price of the order
#         order.total_price = total_price
#         order.save()

#         # Serialize and return the created order data
#         serializer = OrdersSerializer(order)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)