from django.db import models
from django.contrib.auth.models import User

class Attendance(models.Model):
    date = models.DateField()


class Group(models.Model):
    name = models.CharField(max_length=30)


class Student(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    phone_number = models.CharField(max_length=11)
    balance = models.IntegerField(null=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True)
    attendance = models.ManyToManyField(Attendance)


class Teacher(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    phone_number = models.CharField(max_length=11)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    group = models.ForeignKey(Group, on_delete=models.CASCADE, null=True)


class Video(models.Model):
    caption = models.CharField(max_length=100)
    video = models.FileField(upload_to="video/%y")

    def __str__(self):
        return self.caption

