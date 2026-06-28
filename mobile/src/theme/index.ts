import { Platform } from 'react-native';

export const BASE_URL = Platform.select({
  android: 'http://10.0.2.2:3000', // Connects Android emulator to local Next.js dev server
  default: 'http://localhost:3000', // Connects iOS simulator and web previews to local server
});

export const THEME = {
  colors: {
    background: '#02040a',
    surface: '#10131b',
    surfaceDim: '#0a0d14',
    surfaceBright: '#1c202e',
    primary: '#40e8ff', // Neon Tech Cyan
    secondary: '#2f7dff', // Electric Royal Blue
    tertiary: '#f7fbff', // Icy Hyper-White
    textPrimary: '#f7fbff',
    textSecondary: '#c9d4e2',
    border: 'rgba(141, 211, 255, 0.16)', // Cyber Line Outline
    error: '#ffb4ab',
    glassGradient: ['rgba(11, 20, 38, 0.76)', 'rgba(7, 12, 24, 0.48)'] as const,
    glowGlow: 'rgba(64, 232, 255, 0.28)',
  },
  typography: {
    display: {
      fontFamily: 'System',
      fontSize: 30,
      fontWeight: '700' as const,
      lineHeight: 38,
      letterSpacing: -0.5,
    },
    headline: {
      fontFamily: 'System',
      fontSize: 22,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    title: {
      fontFamily: 'System',
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 22,
    },
    bodyLarge: {
      fontFamily: 'System',
      fontSize: 15,
      fontWeight: '400' as const,
      lineHeight: 22,
    },
    bodyMedium: {
      fontFamily: 'System',
      fontSize: 13,
      fontWeight: '400' as const,
      lineHeight: 18,
    },
    labelCaps: {
      fontFamily: 'System',
      fontSize: 11,
      fontWeight: '700' as const,
      lineHeight: 16,
      letterSpacing: 2,
    },
  },
  spacing: {
    unit: 4,
    gutter: 16,
    sectionGap: 32,
  },
  roundness: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999, // Capsule buttons shape
  },
};
