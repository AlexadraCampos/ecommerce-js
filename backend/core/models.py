from django.db import models
from django.contrib.auth.models import User

class Anuncio(models.Model):
    TIPO_CHOICES = [
        ('produtos', 'Produto'),
        ('servico', 'Serviço')
    ]

    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Anúncio de {self.titulo} ({self.tipo})"


class Item(models.Model):
    TIPO_CHOICES = [
        ('produtos', 'Produto'),
        ('servico', 'Serviço')
    ]

    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.titulo}"


class Produto(models.Model):
    nome = models.CharField(max_length=100)  # Nome do produto (ex: Bolo de chocolate)
    descricao = models.TextField()           # Detalhes do produto
    preco = models.DecimalField(max_digits=10, decimal_places=2)  # Valor com 2 casas decimais
    criado_em = models.DateTimeField(auto_now_add=True)  # Data de criação automática

    def __str__(self):
        return self.nome
 
class Servico(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome
    
