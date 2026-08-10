/**** Connietech Tailwind Config ****/
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0052CC',
          green: '#10B981',
          orange: '#FF6B35',
          dark: '#1F2937',
          light: '#F3F4F6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif']
      },
      typography: (theme) => ({
        brand: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.brand.blue'),
              textDecoration: 'underline',
              '&:hover': { color: theme('colors.emerald.700') },
            },
            h1: { color: theme('colors.brand.dark') },
            h2: { color: theme('colors.brand.dark') },
            h3: { color: theme('colors.brand.dark') },
            strong: { color: theme('colors.brand.dark') },
            'ul > li::marker': { color: theme('colors.brand.blue') },
            'ol > li::marker': { color: theme('colors.brand.blue') },
            blockquote: { borderLeftColor: theme('colors.brand.blue') },
          },
        },
      }),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
