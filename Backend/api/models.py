from django.db import models

class Product(models.Model):
    ProductName = models.CharField(unique=True, max_length=100)
    Description = models.TextField()
    Price = models.DecimalField(max_digits=10, decimal_places=2)
    Category = models.CharField(max_length=100)
    Stocks = models.PositiveIntegerField() 
    Created = models.DateTimeField(auto_now_add=True)
    Modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.ProductName
    
###############################################

class Orders(models.Model):
    order_number = models.CharField(max_length=20, unique=True, blank=True)  # For custom order number
    Product = models.CharField(max_length=100)
    Name = models.CharField(max_length=100)
    Phone = models.CharField(max_length=15)
    Email = models.EmailField(max_length=100)
    Note = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    qty = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.order_number} - {self.Name} - Qty: {self.qty}"
    
    def save(self, *args, **kwargs):
        if not self.order_number:
            # Generate custom order number like 'ORD-001'
            last_order = Orders.objects.all().order_by('id').last()
            if last_order:
                last_number = int(last_order.order_number.split('-')[1])
                new_number = last_number + 1
            else:
                new_number = 1
            self.order_number = f"ORD-{new_number:03d}"
        super(Orders, self).save(*args, **kwargs)

############################
#Test#

# class OrderProduct(models.Model):
#     order = models.ForeignKey('Orders', related_name='order_items', on_delete=models.CASCADE)
#     product = models.ForeignKey(Product, related_name='order_products', on_delete=models.CASCADE)
#     quantity = models.PositiveIntegerField(default=1)
#     price = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f"{self.product.name} - {self.quantity} x {self.price}"
    
# class Orders(models.Model):
#     order_number = models.CharField(max_length=50, unique=True)
#     name = models.CharField(max_length=100)
#     phone = models.CharField(max_length=15)
#     email = models.EmailField()
#     note = models.TextField(null=True, blank=True)
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.order_number