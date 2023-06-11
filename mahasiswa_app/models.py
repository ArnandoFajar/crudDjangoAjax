from django.db import models

# Create your models here.


class Mahasiswa(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    contact = models.CharField(max_length=15)

    class Meta:
        db_table = 'tblmahasiswa'
