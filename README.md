# Exoctic Software

Marketing website for Exoctic Software: connected business software (billing, payroll & HR, travel management, reporting, custom systems) and custom trip management apps for iOS, Android and web.

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
  favicon-32.png, favicon-512.png, apple-touch-icon.png
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Before going live

- Replace sample figures, testimonials, case studies, client logos and pricing (marked with `Sample ...` comments in `index.html`).
- Confirm each listed integration before publishing.
- Wire the demo form and newsletter form to a backend (see the `TODO` in the script).
- Have a qualified lawyer review `privacy.html` and `terms.html`, add the registered legal entity name and address, and confirm the governing law and arbitration clause.
- Compile Tailwind with the Tailwind CLI instead of the browser build for production.
