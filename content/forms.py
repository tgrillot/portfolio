from django import forms
from captcha.fields import ReCaptchaField
from captcha.widgets import ReCaptchaV3

class ContactForm(forms.Form):
    from_email = forms.EmailField(label='', required=True, error_messages={'invalid':'Please enter a valid email address.'}, widget=forms.EmailInput(attrs={"class": "text-text-primary bg-secondary-bg rounded-sm","placeholder":"Your email address..."}))
    sender_name = forms.CharField(label='', required=True, widget=forms.TextInput(attrs={"class": "text-text-primary bg-secondary-bg rounded-sm","placeholder":"Your name..."}))
    subject = forms.CharField(label='', required=True, widget=forms.TextInput(attrs={"class": "text-text-primary bg-secondary-bg rounded-sm","placeholder":"Message subject..."}))
    message = forms.CharField(label='', required=True, widget=forms.Textarea(attrs={"class": "text-text-primary bg-secondary-bg rounded-sm","placeholder":"Message body..."}))
    captcha = ReCaptchaField(label='', widget=ReCaptchaV3)
    