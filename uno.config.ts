import { defineConfig, presetUno, presetWebFonts, presetTypography } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Open Sans',
        mono: 'Fira Code',
        baloo: [
          {
            name: 'Baloo 2',
            weights: ['300', '400', '700', '900']
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ]
      }
    })
  ],
  theme: {
    colors: {
      "primary": {
        50: "#E6F8F9",
        100: "#C9F1F3",
        200: "#97E4E8",
        300: "#60D6DC",
        400: "#2DC5CD",
        500: "#22959B",
        600: "#166064",
        700: "#11484B",
        800: "#0B3032",
        900: "#061819",
        950: "#030C0D"
      }
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    }
  }
});
