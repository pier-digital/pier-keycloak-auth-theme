import type { Config } from 'tailwindcss';
import tailwindColors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import { colors } from '@pierdigital/shared-tokens';

export default {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    fontFamily: {
      sans: ['Heebo', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: tailwindColors.blue,
        secondary: tailwindColors.gray,
        pier: {
          title: colors.blue700,
          subtitle: colors.grey400,
          body: colors.blue700,
          background: colors.blue700,
          button: colors.primary600,
          link: colors.primary600,
          alert: {
            success: {
              bg: colors.greenBackground,
              text: colors.grey500,
            },
            error: {
              bg: colors.orangeBackground,
              text: colors.grey500,
            },
            warning: {
              bg: colors.yellowBackground,
              text: colors.grey500,
            },
            info: {
              bg: colors.secondary100,
              text: colors.grey500,
            },
          },
        },
        provider: {
          apple: '#000000',
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
      fontFamily: {
        sans: ['Heebo', ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;
