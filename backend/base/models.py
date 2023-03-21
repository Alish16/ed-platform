from django.db import models
from django.contrib.auth.models import User

class Attendance(models.Model):
    date = models.DateField()


class Group(models.Model):
    name = models.CharField(max_length=30)


class User(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    phone_number = models.CharField(max_length=11)
    balance = models.IntegerField(null=True)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=10)
    password = models.CharField(max_length=255)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True)
    attendance = models.ManyToManyField(Attendance, null=True)


class Video(models.Model):
    caption = models.CharField(max_length=100)
    video = models.FileField(upload_to="video/",  verbose_name="")

    def __str__(self):
        return self.caption

