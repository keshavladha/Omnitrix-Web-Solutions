import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
} from 'react-native';
import { THEME } from '../theme';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export function CustomButton({
  title,
  variant = 'primary',
  loading = false,
  style,
  disabled,
  ...props
}: CustomButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[
        styles.buttonBase,
        isPrimary ? styles.buttonPrimary : styles.buttonSecondary,
        disabled && styles.buttonDisabled,
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={isPrimary ? '#02040a' : THEME.colors.primary}
        />
      ) : (
        <View style={styles.contentContainer}>
          <Text
            style={[
              styles.textBase,
              isPrimary ? styles.textPrimary : styles.textSecondary,
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    height: 52,
    borderRadius: THEME.roundness.full, // Capsule shape
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  buttonPrimary: {
    backgroundColor: '#ffffff',
    shadowColor: THEME.colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  buttonSecondary: {
    backgroundColor: 'rgba(16, 19, 27, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(64, 232, 255, 0.3)',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  textPrimary: {
    color: '#02040a',
  },
  textSecondary: {
    color: THEME.colors.primary,
  },
});
