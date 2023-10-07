from .models import portfolioOwner, skill, project
from rest_framework import serializers

class OwnerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = portfolioOwner
        fields = ['fname','lname','sitename','github','gitea','linkedin','upwork','resume','headshot','bio','email','phone','taglines','headline']

class SkillSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = skill
        fields = ['name','blurb','explevel','longdesc','slug']

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = project
        fields = ['name','tagline','startdate','enddate','longdesc','repo','live','promoted','skills','slug']