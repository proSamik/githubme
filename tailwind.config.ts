// tailwind.config.ts
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      transitionDuration: {
        '3000': '3000ms',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            'h1, h2, h3, h4': {
              fontFamily: 'serif',
            },
            // Image styles
            img: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
            },
            // Table styles
            table: {
              display: 'block',
              overflowX: 'auto',
              width: '100%',
            },
            'table thead': {
              backgroundColor: '#f8f9fa',
              borderBottom: '2px solid #e9ecef',
            },
            'table thead th': {
              padding: '0.75rem 1rem',
              whiteSpace: 'nowrap',
            },
            'table tbody td': {
              padding: '0.75rem 1rem',
            },
            'table tbody tr': {
              borderBottom: '1px solid #e9ecef',
            },
            // Code styles
            code: {
              color: '#1f2937',
              backgroundColor: '#f3f4f6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderRadius: '0',
              padding: '0',
              fontSize: '1em',
            },
          },
        },
        // Dark mode styles
        invert: {
          css: {
            color: '#fff',
            'code': {
              color: '#e5e7eb',
              backgroundColor: '#374151',
            },
            'table thead': {
              backgroundColor: '#2b2d31',
              borderBottom: '2px solid #313338',
            },
            'table tbody tr': {
              borderBottom: '1px solid #313338',
            },
            a: {
              color: '#5865f2',
              '&:hover': {
                color: '#4752c4',
              },
            },
            strong: {
              color: '#fff',
            },
            'h1, h2, h3, h4': {
              color: '#fff',
            },
            blockquote: {
              color: '#949ba4',
              borderLeftColor: '#2f3136',
            },
          },
        },
      },
      colors: {
        dark: {
          background: '#1e1f22',
          'background-soft': '#2b2d31',
          'background-hover': '#313338',
          text: '#ffffff',
          'text-secondary': '#949ba4',
          border: '#2f3136',
          accent: '#5865f2',
        },
      },
      aspectRatio: {
        'video': '16 / 9',
      },
    },
  },
  plugins: [
    typography,
    aspectRatio,
  ],
} satisfies Config;