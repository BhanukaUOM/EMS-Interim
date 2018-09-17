@component('mail::message')
# Password reset from EMS

<h3>Hi! Did you forget your Opera password?</h3>
Click on this link to change your password:

@component('mail::button', ['url' => 'https://ems.aladinlabs.com/reset-password-submit?token='.$token])
Reset Password
@endcomponent

We suggest making your password easy to remember, but also as strong as possible. Try not to use any word that can be found in the dictionary, but do use a combination of upper and lower-case letters along with numbers and/or special characters.
<br><br>
If you did not request a password reset, then simply ignore this email and no changes will be made.
<br><br>
Have a great day!<br>
{{ config('app.name') }}
@endcomponent
