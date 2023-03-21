from django.shortcuts import render
from .models import Video


def index(request):
    video = Video.objects.all()
    return render(request, "index.html", {"video": video})
