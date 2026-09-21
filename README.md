# Exoctic Group

Marketing website for Exoctic Group: connected business software (billing, payroll & HR, travel management, reporting, custom systems) and custom trip management apps for iOS, Android and web.

## Structure

```
index.html            Landing page (Tailwind v4 browser build, GSAP ScrollTrigger, Lenis smooth scroll)
privacy.html          Privacy Policy
terms.html            Terms of Service
favicon.ico
assets/
  logo.png            Logo for light backgrounds
  logo-light.png      Logo for dark backgrounds
  legal.css           Styles for the legal pages
  legal.js            Table-of-contents dropdown and scrollspy for the legal pages
  favicon-32.png, favicon-512.png, apple-touch-icon.png
```

## Forms

The demo form and the newsletter form post to [Web3Forms](https://web3forms.com) as JSON. The access key lives in the hidden `access_key` input of each form in `index.html`; submissions are emailed to the address that key is registered to. A hidden `botcheck` field acts as the honeypot.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Before going live

- Replace sample figures, testimonials, case studies, client logos and pricing (marked with `Sample ...` comments in `index.html`).
- Confirm each listed integration before publishing.
- Set the WhatsApp link (`data-whatsapp` anchors in `index.html`).
- Have a qualified lawyer review `privacy.html` and `terms.html`, add the registered legal entity name and address, and confirm the governing law and arbitration clause.
- Compile Tailwind with the Tailwind CLI instead of the browser build for production.
