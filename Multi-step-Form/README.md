# Multi-step Form

A small React + Vite demo application showcasing a multi-step form built with Tailwind CSS and DaisyUI.

## Features

- 3-step form flow
- Basic validation before advancing to the next step
- Reusable step components
- Tailwind + DaisyUI styling
- Submit action logs form data to the console

## Project structure

- `src/App.jsx` - main form flow and navigation logic
- `src/components/Step1.jsx` - first step: name and email input
- `src/components/Step2.jsx` - second step: phone and city input
- `src/components/Step3.jsx` - final review / submit step

## Scripts

From the `Multi-step-Form` directory, use:

- `npm install` - install dependencies
- `npm run dev` - start the development server
- `npm run build` - build the production bundle
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint checks

## Dependencies

- `react`
- `react-dom`
- `vite`
- `tailwindcss`
- `@tailwindcss/vite`
- `daisyui`

## Usage

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal.

4. Fill the form fields and navigate between steps.

## Notes

- The form currently uses simple `alert()` validation for missing fields.
- Submitting the final step displays a confirmation and logs the entered data to the browser console.
