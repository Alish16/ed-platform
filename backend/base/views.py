from django.shortcuts import render
from .models import Video, User
from django.contrib.auth.decorators import login_required
from .models import Video
from .decorators import teacher_required


@login_required
@teacher_required
def index(request):
    video = Video.objects.all()
    return render(request, "index.html", {"video": video})
