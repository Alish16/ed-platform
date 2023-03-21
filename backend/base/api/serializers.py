from rest_framework.serializers import ModelSerializer
from ..models import User, Video
from rest_framework.authtoken.models import Token


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'phone_number', 'balance', 'email', 'role', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            Token.objects.create(user=user)
            return user


class VideoSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = ['caption', 'video']