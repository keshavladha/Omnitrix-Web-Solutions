import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../theme';

interface GlassPanelProps extends ViewProps {
  intensity?: number;
  borderRadius?: number;
  glow?: boolean;
}

export function GlassPanel({
  children,
  style,
  intensity = 15,
  borderRadius = THEME.roundness.xl, // 16px radius
  glow = false,
  ...props
}: GlassPanelProps) {
  return (
    <View
      style={[
        styles.container,
        { borderRadius },
        glow && styles.glowActive,
        style,
      ]}
      {...props}
    >
      <BlurView
        intensity={intensity}
        tint="dark"
        style={[styles.blurView, { borderRadius }]}
      >
        <LinearGradient
          colors={[...THEME.colors.glassGradient]}
          style={[styles.gradient, { borderRadius }]}
        >
          <View style={styles.content}>{children}</View>
        </LinearGradient>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(16, 19, 27, 0.45)',
    borderWidth: 1,
    borderColor: THEME.colors.border, // rgba(141, 211, 255, 0.16)
    overflow: 'hidden',
  },
  blurView: {
    width: '100%',
  },
  gradient: {
    width: '100%',
  },
  content: {
    padding: 20,
  },
  glowActive: {
    shadowColor: THEME.colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
    borderColor: 'rgba(64, 232, 255, 0.45)',
  },
});
