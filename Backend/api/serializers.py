from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','ProductName', 'Description','Price', 'Category', 'Stocks')

#################### This Is the Working 

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = ['order_number', 'Product', 'Name', 'Phone', 'Email', 'Note', 'price', 'qty', 'total_price', 'created_at']

    def create(self, validated_data):
        # Automatically handle the custom order_number in the create method
        order = Orders(**validated_data)
        order.save()  # This will trigger the save method, which generates the order_number
        return order

    def update(self, instance, validated_data):
        # Handle updating the order (order_number is not typically updated, so we ignore it)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()  # This will not change the order_number
        return instance

#################
#Test#

# class OrderProductSerializer(serializers.ModelSerializer):
#     product = ProductSerializer()

#     class Meta:
#         model = OrderProduct
#         fields = ['product', 'quantity', 'price']

# class OrdersSerializer(serializers.ModelSerializer):
#     order_items = OrderProductSerializer(many=True)

#     class Meta:
#         model = Orders
#         fields = ['order_number', 'name', 'phone', 'email', 'note', 'total_price', 'order_items']