/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primär palett
        'base': '#FAFAF8',
        'base-subtle': '#F5F5F3',
        'text': '#1A1A1A',
        'text-muted': '#6B7280',
        'text-subtle': '#9CA3AF',

        // Accent - dämpad grön (förtroende, kompetens)
        'accent': '#3D6B5C',
        'accent-hover': '#4A7C6F',
        'accent-subtle': '#E8F0ED',

        // Sekundär - blågrå (intelligens, sparsam)
        'secondary': '#64748B',
        'secondary-subtle': '#F1F5F9',

        // Gränser och linjer
        'border': '#E5E7EB',
        'border-strong': '#D1D5DB',
      },
      fontFamily: {
        'display': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'content': '680px',
        'wide': '1024px',
      },
    },
  },
  plugins: [],
}
