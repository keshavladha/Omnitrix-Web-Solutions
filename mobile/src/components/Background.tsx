import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../theme';

const { width, height } = Dimensions.get('window');

export function AmbientBackground() {
  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Base Obsidian Black Canvas */}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: THEME.colors.background }]} />

      {/* Cybernetic Structural Ambient Glow 1 (Top Left Primary Neon Cyan Halo) */}
      <LinearGradient
        colors={['rgba(64, 232, 255, 0.14)', 'transparent']}
        style={[
          styles.glowBase,
          {
            top: -height * 0.1,
            left: -width * 0.2,
            width: width * 0.95,
            height: width * 0.95,
            borderRadius: (width * 0.95) / 2,
          },
        ]}
      />

      {/* Cybernetic Structural Ambient Glow 2 (Bottom Right Royal Blue Halo) */}
      <LinearGradient
        colors={['rgba(47, 125, 255, 0.12)', 'transparent']}
        style={[
          styles.glowBase,
          {
            bottom: -height * 0.15,
            right: -width * 0.2,
            width: width * 1.1,
            height: width * 1.1,
            borderRadius: (width * 1.1) / 2,
          },
        ]}
      />

      {/* Subtle Structural Cybernetic grid overlay */}
      <View style={styles.gridContainer} pointerEvents="none">
        {Array.from({ length: 12 }).map((_, i) => (
          <View
            key={`v-${i}`}
            style={[
              styles.gridLineVertical,
              { left: (width / 12) * i },
            ]}
          />
        ))}
        {Array.from({ length: 24 }).map((_, i) => (
          <View
            key={`h-${i}`}
            style={[
              styles.gridLineHorizontal,
              { top: (height / 24) * i },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  glowBase: {
    position: 'absolute',
    opacity: 0.8,
  },
  gridContainer: {
    ...StyleSheet.absoluteFill,
    opacity: 0.02,
  },
  gridLineVertical: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: '#40e8ff',
  },
  gridLineHorizontal: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#40e8ff',
  },
});
