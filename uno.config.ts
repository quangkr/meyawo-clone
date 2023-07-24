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
            name: 'Baloo 2'
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
      primary: {
        500: 'hsla(var(--hue), 62%, 62%)'
      }
    }
  }
});
