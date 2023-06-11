from django.shortcuts import render, redirect
from mahasiswa_app.models import Mahasiswa
import pprint
# Create your views here.


def index(request):
    return render(request, 'index.html')


def create(request):
    # collect input
    Name = request.POST['name']
    Email = request.POST['email']
    Contact = request.POST['contact']

    mahasiswa = Mahasiswa(name=Name, email=Email, contact=Contact)
    mahasiswa.save()
    return redirect('/')


def read(request):
    mahasiswas = Mahasiswa.objects.all()
    data = {'mahasiswas': mahasiswas}
    return render(request, 'result.html', data)


def edit(request, id):
    mahasiswa = Mahasiswa.objects.get(id=id)
    data = {'mahasiswa': mahasiswa}
    return render(request, 'edit.html', data)


def update(request, id):
    mahasiswa = Mahasiswa.objects.get(id=id)
    mahasiswa.name = request.POST['name']
    mahasiswa.email = request.POST['email']
    mahasiswa.contact = request.POST['contact']
    mahasiswa.save()
    return redirect('/')


def delete(request, id):
    mahasiswa = Mahasiswa.objects.get(id=id)
    mahasiswa.delete()
    return redirect('/')
