import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Globe, Smartphone, Cloud, BrainCircuit, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react-native';
import { THEME } from '../theme';
import { AmbientBackground } from '../components/Background';
import { GlassPanel } from '../components/GlassPanel';
import { CustomButton } from '../components/CustomButton';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  specs: { label: string; value: string }[];
  details: string[];
}

interface ServicesScreenProps {
  onConfigureService: (serviceName: string) => void;
}

export function ServicesScreen({ onConfigureService }: ServicesScreenProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'web',
      title: 'Web Applications',
      icon: <Globe size={24} color={THEME.colors.primary} />,
      tagline: 'High-performance, visual-rich Next.js ecosystems.',
      specs: [
        { label: 'LATENCY', value: '<50MS' },
        { label: 'SECURITY', value: 'AES-256' },
        { label: 'UPTIME', value: '99.9%' },
      ],
      details: [
        'Custom edge-rendered dynamic pages',
        'Immersive layout styling and Framer animations',
        'State-of-the-art serverless architecture integration',
        'Complete Razorpay and Stripe transaction workflows',
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile Architectures',
      icon: <Smartphone size={24} color={THEME.colors.primary} />,
      tagline: 'Ultra-smooth React Native cross-platform apps.',
      specs: [
        { label: 'RENDERING', value: '60 FPS' },
        { label: 'PLATFORM', value: 'IOS & ANDROID' },
        { label: 'CORE ENGINE', value: 'EXPO NATIVE' },
      ],
      details: [
        'Fluid gestures and responsive hardware hookups',
        'Universal code sharing across ecosystems',
        'Real-time offline database mirroring',
        'Instant Over-The-Air deployment setups',
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: <Cloud size={24} color={THEME.colors.primary} />,
      tagline: 'Resilient auto-scaling serverless pipelines.',
      specs: [
        { label: 'UPTIME', value: '99.99%' },
        { label: 'SCALING', value: 'AUTO-SHARD' },
        { label: 'MONITORING', value: 'REAL-TIME' },
      ],
      details: [
        'Serverless cloud setups via AWS, GCP, and Vercel',
        'End-to-end automated deployment scripts',
        'Structured database indices & backup grids',
        'Dynamic secure session integrations',
      ],
    },
    {
      id: 'ai',
      title: 'Intelligent AI Systems',
      icon: <BrainCircuit size={24} color={THEME.colors.primary} />,
      tagline: 'Private predictive model integrations.',
      specs: [
        { label: 'MODELS', value: 'NEURAL/LLM' },
        { label: 'INFERENCE', value: 'REAL-TIME' },
        { label: 'TRAINING', value: 'FINE-TUNED' },
      ],
      details: [
        'Secure multi-model LLM API pipelines',
        'Self-hosting vector base searches',
        'Automated document processing pipelines',
        'Custom analytical dashboard matrices',
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={styles.container}>
      <AmbientBackground />

      <SafeAreaView style={styles.safeArea}>
        {/* Header bar */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>TACTICAL SOLUTIONS</Text>
          <Text style={styles.headerSubtitle}>System Capabilities & Architectures</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.introContainer}>
            <Text style={styles.introText}>
              Select a core architectural blueprint to begin deployment. Every model is fully customized to startup specifications.
            </Text>
          </View>

          {services.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <GlassPanel
                key={service.id}
                style={[
                  styles.serviceCard,
                  isExpanded && styles.expandedCardBorder,
                ]}
                intensity={12}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => toggleExpand(service.id)}
                  style={styles.cardHeaderPress}
                >
                  <View style={styles.cardHeaderLeft}>
                    <View style={styles.iconContainer}>{service.icon}</View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.cardTitle}>{service.title}</Text>
                      <Text style={styles.cardTagline}>{service.tagline}</Text>
                    </View>
                  </View>
                  <View style={styles.expandIcon}>
                    {isExpanded ? (
                      <ChevronUp size={20} color={THEME.colors.textSecondary} />
                    ) : (
                      <ChevronDown size={20} color={THEME.colors.textSecondary} />
                    )}
                  </View>
                </TouchableOpacity>

                {/* Specs Grid */}
                <View style={styles.specsRow}>
                  {service.specs.map((spec, i) => (
                    <View key={i} style={styles.specBox}>
                      <Text style={styles.specLabel}>{spec.label}</Text>
                      <Text style={styles.specValue}>{spec.value}</Text>
                    </View>
                  ))}
                </View>

                {/* Expanded Details */}
                {isExpanded && (
                  <View style={styles.detailsContainer}>
                    <View style={styles.divider} />
                    <Text style={styles.detailsTitle}>PROTOCOL INCLUDES:</Text>
                    {service.details.map((detail, index) => (
                      <View key={index} style={styles.detailRow}>
                        <CheckCircle2 size={14} color={THEME.colors.primary} style={styles.checkIcon} />
                        <Text style={styles.detailText}>{detail}</Text>
                      </View>
                    ))}

                    <CustomButton
                      title="Configure Protocol"
                      variant="primary"
                      onPress={() => onConfigureService(service.title)}
                      style={styles.configureBtn}
                    />
                  </View>
                )}
              </GlassPanel>
            );
          })}

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
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: THEME.colors.border,
    backgroundColor: 'rgba(2, 4, 10, 0.8)',
  },
  headerTitle: {
    fontFamily: THEME.typography.headline.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 2,
  },
  headerSubtitle: {
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    color: THEME.colors.primary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  introContainer: {
    marginBottom: 20,
  },
  introText: {
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },
  serviceCard: {
    marginBottom: 16,
    width: '100%',
  },
  expandedCardBorder: {
    borderColor: 'rgba(64, 232, 255, 0.4)',
  },
  cardHeaderPress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: THEME.roundness.md,
    backgroundColor: 'rgba(64, 232, 255, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(64, 232, 255, 0.15)',
  },
  cardTitle: {
    fontFamily: THEME.typography.title.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  cardTagline: {
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 11,
    marginTop: 2,
  },
  expandIcon: {
    padding: 4,
  },
  specsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    backgroundColor: 'rgba(2, 4, 10, 0.3)',
    borderRadius: THEME.roundness.md,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.02)',
  },
  specBox: {
    alignItems: 'center',
    flex: 1,
  },
  specLabel: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  specValue: {
    fontFamily: THEME.typography.title.fontFamily,
    color: THEME.colors.primary,
    fontSize: 13,
    fontWeight: '800',
  },
  detailsContainer: {
    marginTop: 16,
  },
  divider: {
    height: 1,
    backgroundColor: THEME.colors.border,
    marginBottom: 16,
  },
  detailsTitle: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    gap: 8,
  },
  checkIcon: {
    marginTop: 2,
  },
  detailText: {
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
    flex: 1,
  },
  configureBtn: {
    marginTop: 16,
    height: 46,
  },
  footerSpacing: {
    height: 80,
  },
});
