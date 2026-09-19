# Exoctic Software

Marketing website for Exoctic Software: connected business management software (invoicing, accounting, payroll & HR, travel management, reporting and custom systems) for companies in Pakistan and the UAE.

## Structure

```
index.html            Single-page site (Tailwind v4 browser build, Phosphor icons)
favicon.ico
assets/
  logo.png            Logo for light backgrounds
  logo-light.png      Logo for dark backgrounds
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
- Compile Tailwind with the Tailwind CLI instead of the browser build for production.
- Review the compliance section when FBR or UAE rules change (dates are current as of September 2026).
