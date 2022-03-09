module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkMode': '#191919',
        'lightMode': '#ffffff',
      },
      fontSize: {
        'contentxs': '0.625rem',
        'contents': '0.75rem',
        'contentm': '0.875rem',
        'content': '1rem',
        'contentxl': '1.125rem',
        'content2xl': '1.25rem',
        'content3xl': '1.375rem',
        'content4xl': '1.5rem',
        'headingxs': '1.125rem',
        'headings': '1.25rem',
        'headingm': '1.375rem',
        'heading': '1.625rem',
        'headingxl': '1.75rem',
        'heading2xl': '2rem',
        'heading3xl': '2.25rem',
        'heading4xl': '2.625rem',
      },
      fontWeight: {
        'content': '400',
        'button': '500',
        'heading': '600',
      },
    },
  },
  plugins: [],
}
