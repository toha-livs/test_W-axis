from django.db import models


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    price = models.IntegerField()

    def __str__(self):
        return 'id:{} {}'.format(self.id, self.name)


class Order(models.Model):
    id = models.UUIDField(primary_key=True)
    date = models.DateTimeField(auto_now=True)


class ShopingCash(models.Model):
    id = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='shopping_cash')

    def __str__(self):
        return '{} pd:{} od:{}'.format(self.id, self.product, self.order)