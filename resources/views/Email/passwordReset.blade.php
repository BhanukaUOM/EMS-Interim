@component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => 'https://ems.aladinlabs.com/reset-password-submit?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
