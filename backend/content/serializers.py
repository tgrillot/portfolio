from .models import portfolioOwner, skill, project
from rest_framework import serializers

class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = portfolioOwner
        fields = ['fname','lname','sitename','github','gitea','linkedin','upwork','resume','headshot','bio','email','phone','taglines','headline']
    
    def to_representation(self, instance):
        response = super(OwnerSerializer, self).to_representation(instance)
        if instance.headshot:
            response['headshot'] = instance.headshot.url
        if instance.resume:
            response['resume'] = instance.resume.url
        return response

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = skill
        fields = ['name','blurb','explevel','longdesc','slug']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = project
        fields = ['name','tagline','startdate','enddate','longdesc','repo','live','promoted','skills','slug']