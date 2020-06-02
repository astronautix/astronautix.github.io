---
title: Security of the Password
subtitle: Knowledge is Power
comments: false
---


More informations at https://github.com/matteobrusa/Password-protection-for-static-pages

# Password protection

This simple HTML document helps you protecting static pages or whole websites with no server configuration required: you can now use Dropbox, Amazon S3 or any generic hosting service to host a private, password protected site.

# Is this secure?

Pretty much secure, please consider that:

1. If your hosting service offers directory listing, a visitor can bypass the protection.
    
2. there's no protection against brute force attack. Pick a very long and hard to guess password.
    
    
3. The password's hash is part of the URI. Enforce HTTPS to avoid man in the middle attacks.
