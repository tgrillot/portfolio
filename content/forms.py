from django import forms

class ContactForm(forms.Form):
    from_email = forms.EmailField(label='', required=True, error_messages={'invalid':'Please enter a valid email address.'}, widget=forms.EmailInput(attrs={"class": "text-text-primary bg-secondary-bg rounded","placeholder":"Your email address..."}))
    sender_name = forms.CharField(label='', required=True, widget=forms.TextInput(attrs={"class": "text-text-primary bg-secondary-bg rounded","placeholder":"Your name..."}))
    subject = forms.CharField(label='', required=True, widget=forms.TextInput(attrs={"class": "text-text-primary bg-secondary-bg rounded","placeholder":"Message subject..."}))
    message = forms.CharField(label='', required=True, widget=forms.Textarea(attrs={"class": "text-text-primary bg-secondary-bg rounded","placeholder":"Message body..."}))
    