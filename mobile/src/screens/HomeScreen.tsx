import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Terminal, Shield, Cpu, Activity, Stars } from 'lucide-react-native';
import { THEME } from '../theme';
import { AmbientBackground } from '../components/Background';
import { GlassPanel } from '../components/GlassPanel';
import { CustomButton } from '../components/CustomButton';

const { width } = Dimensions.get('window');

interface HomeScreenProps {
  onNavigateToPlanner: () => void;
  onNavigateToServices: () => void;
}

export function HomeScreen({ onNavigateToPlanner, onNavigateToServices }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <AmbientBackground />

      <SafeAreaView style={styles.safeArea}>
        {/* Header bar */}
        <View style={styles.header}>
          <Text style={styles.headerLogo}>OMNITRIX</Text>
          <View style={styles.headerTag}>
            <Text style={styles.headerTagText}>SYS.ONLINE</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Hero Section */}
          <View style={styles.heroSection}>
            <View style={styles.eyebrowContainer}>
              <Stars size={12} color={THEME.colors.primary} />
              <Text style={styles.eyebrow}>PREMIUM SOFTWARE STUDIO</Text>
            </View>

            <Text style={styles.heroTitle}>
              Cinematic{'\n'}
              <Text style={{ color: THEME.colors.primary }}>Digital Craft</Text>
            </Text>

            <Text style={styles.heroSubtitle}>
              We engineer ultra-premium web ecosystems and intelligent mobile architectures built for hyper-growth startups.
            </Text>

            <View style={styles.heroActionContainer}>
              <CustomButton
                title="Launch Planner"
                variant="primary"
                onPress={onNavigateToPlanner}
                style={styles.heroBtn}
              />
              <CustomButton
                title="Our Services"
                variant="secondary"
                onPress={onNavigateToServices}
                style={styles.heroBtn}
              />
            </View>
          </View>

          {/* Stats Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionEyebrow}>SYSTEM METRICS</Text>
              <Text style={styles.sectionTitle}>Performance Grid</Text>
            </View>

            <View style={styles.statsGrid}>
              <GlassPanel style={styles.statCard} intensity={10}>
                <View style={styles.statHeader}>
                  <Activity size={18} color={THEME.colors.primary} />
                  <Text style={styles.statLabel}>LATENCY</Text>
                </View>
                <Text style={styles.statValue}>&lt;50ms</Text>
                <Text style={styles.statDesc}>Global CDN Speed</Text>
              </GlassPanel>

              <GlassPanel style={styles.statCard} intensity={10}>
                <View style={styles.statHeader}>
                  <Shield size={18} color={THEME.colors.primary} />
                  <Text style={styles.statLabel}>SECURITY</Text>
                </View>
                <Text style={styles.statValue}>256-Bit</Text>
                <Text style={styles.statDesc}>AES Encrypted</Text>
              </GlassPanel>

              <GlassPanel style={styles.statCard} intensity={10}>
                <View style={styles.statHeader}>
                  <Cpu size={18} color={THEME.colors.primary} />
                  <Text style={styles.statLabel}>UPTIME</Text>
                </View>
                <Text style={styles.statValue}>99.9%</Text>
                <Text style={styles.statDesc}>SLA Guaranteed</Text>
              </GlassPanel>

              <GlassPanel style={styles.statCard} intensity={10}>
                <View style={styles.statHeader}>
                  <Terminal size={18} color={THEME.colors.primary} />
                  <Text style={styles.statLabel}>BUILDS</Text>
                </View>
                <Text style={styles.statValue}>100+</Text>
                <Text style={styles.statDesc}>Deployed Projects</Text>
              </GlassPanel>
            </View>
          </View>

          {/* Featured Glass Panel */}
          <View style={styles.section}>
            <GlassPanel style={styles.featuredPanel} glow={true} intensity={25}>
              <View style={styles.featuredTag}>
                <Text style={styles.featuredTagText}>CORE INTEL</Text>
              </View>
              <Text style={styles.featuredTitle}>Next-Gen Engineering</Text>
              <Text style={styles.featuredBody}>
                We do not build typical applications. Every project at Omnitrix is custom-designed, optimized for maximum graphics response, and integrated with smooth haptics and real-time backend sync.
              </Text>
              <CustomButton
                title="Initiate Discovery"
                variant="primary"
                onPress={onNavigateToPlanner}
                style={{ marginTop: 8 }}
              />
            </GlassPanel>
          </View>

          <View style={styles.footerSpacing} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.border,
    backgroundColor: 'rgba(2, 4, 10, 0.8)',
  },
  headerLogo: {
    fontFamily: THEME.typography.headline.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 3,
  },
  headerTag: {
    backgroundColor: 'rgba(64, 232, 255, 0.1)',
    borderWidth: 1,
    borderColor: THEME.colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: THEME.roundness.sm,
  },
  headerTagText: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.primary,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  heroSection: {
    alignItems: 'flex-start',
    marginVertical: 24,
  },
  eyebrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: THEME.roundness.full,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginBottom: 16,
  },
  eyebrow: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.5,
    marginLeft: 6,
  },
  heroTitle: {
    fontFamily: THEME.typography.display.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 38,
    fontWeight: '900',
    lineHeight: 46,
    letterSpacing: -1,
    marginBottom: 16,
  },
  heroSubtitle: {
    fontFamily: THEME.typography.bodyLarge.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 28,
  },
  heroActionContainer: {
    flexDirection: 'column',
    width: '100%',
    gap: 12,
  },
  heroBtn: {
    width: '100%',
  },
  section: {
    marginTop: THEME.spacing.sectionGap,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionEyebrow: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 4,
  },
  sectionTitle: {
    fontFamily: THEME.typography.headline.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 22,
    fontWeight: '700',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: (width - 60) / 2,
    minHeight: 120,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 6,
  },
  statLabel: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  statValue: {
    fontFamily: THEME.typography.headline.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 2,
  },
  statDesc: {
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 11,
  },
  featuredPanel: {
    width: '100%',
  },
  featuredTag: {
    backgroundColor: 'rgba(64, 232, 255, 0.1)',
    borderWidth: 1,
    borderColor: THEME.colors.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: THEME.roundness.sm,
    marginBottom: 12,
  },
  featuredTagText: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.primary,
    fontSize: 9,
    fontWeight: '700',
  },
  featuredTitle: {
    fontFamily: THEME.typography.headline.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  featuredBody: {
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 18,
  },
  footerSpacing: {
    height: 80,
  },
});
