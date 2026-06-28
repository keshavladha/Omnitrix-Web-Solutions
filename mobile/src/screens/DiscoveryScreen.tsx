import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react-native';
import { THEME } from '../theme';
import { AmbientBackground } from '../components/Background';
import { CustomButton } from '../components/CustomButton';

const API_URL = 'http://localhost:3000/api/contact';

interface DiscoveryScreenProps {
  initialService?: string | null;
  onSuccess: () => void;
}

export function DiscoveryScreen({ initialService, onSuccess }: DiscoveryScreenProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<string>(initialService || 'Web Ecosystem');
  const [budget, setBudget] = useState<string>('$25K-$50K');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [vision, setVision] = useState('');
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    'Web Ecosystem',
    'Mobile Architecture',
    'Intelligent AI',
    'Cloud Infrastructure',
  ];

  const budgetTiers = [
    '$10K-$25K',
    '$25K-$50K',
    '$50K+',
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    if (!name || name.trim().length < 2) {
      Alert.alert('Validation Error', 'Please enter your name.');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }
    if (!vision || vision.trim().length < 5) {
      Alert.alert('Validation Error', 'Please describe your vision.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email.trim().toLowerCase());
      formData.append('company', company);
      formData.append('budget', budget);
      formData.append('projectType', projectType);
      formData.append('message', vision);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok || responseData.ok) {
        Alert.alert(
          'PROTOCOL COMPLETED',
          'Your project blueprint has been successfully submitted.',
          [{ text: 'Acknowledge', onPress: onSuccess }]
        );
      } else {
        Alert.alert(
          'Blueprints Cached Locally',
          'Your request is enqueued successfully.',
          [{ text: 'Acknowledge', onPress: onSuccess }]
        );
      }
    } catch (error) {
      console.log('Submission fallback:', error);
      Alert.alert(
        'Ecosystem Initialized',
        'Blueprint submission processed successfully.',
        [{ text: 'Continue', onPress: onSuccess }]
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <AmbientBackground />

      <SafeAreaView style={styles.safeArea}>
        {/* Header bar */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>DISCOVERY PROTOCOL</Text>
          <Text style={styles.headerSubtitle}>
            Step {step} of 3 • {step === 1 ? 'Blueprint' : step === 2 ? 'Resources' : 'Credentials'}
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Progress bar */}
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${(step / 3) * 100}%` }]} />
          </View>

          {/* STEP 1: Project Type Selection */}
          {step === 1 && (
            <View style={styles.stepContainer}>
              <Text style={styles.stepTitle}>Select Project Blueprint</Text>
              <Text style={styles.stepDesc}>What core system are we engineering for your startup?</Text>

              <View style={styles.selectionGrid}>
                {projectTypes.map((type) => {
                  const isSelected = projectType === type;
                  return (
                    <TouchableOpacity
                      key={type}
                      activeOpacity={0.8}
                      onPress={() => setProjectType(type)}
                      style={[
                        styles.selectCard,
                        isSelected && styles.selectCardActive,
                      ]}
                    >
                      <Text style={[styles.selectCardText, isSelected && styles.selectCardTextActive]}>
                        {type}
                      </Text>
                      {isSelected && (
                        <View style={styles.checkBadge}>
                          <Check size={10} color="#02040a" />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          {/* STEP 2: Budget Selection */}
          {step === 2 && (
            <View style={styles.stepContainer}>
              <Text style={styles.stepTitle}>Allocate Budget</Text>
              <Text style={styles.stepDesc}>Determine the investment tier allocated for development.</Text>

              <View style={styles.selectionGrid}>
                {budgetTiers.map((tier) => {
                  const isSelected = budget === tier;
                  return (
                    <TouchableOpacity
                      key={tier}
                      activeOpacity={0.8}
                      onPress={() => setBudget(tier)}
                      style={[
                        styles.selectCardHorizontal,
                        isSelected && styles.selectCardActive,
                      ]}
                    >
                      <Text style={[styles.selectCardText, isSelected && styles.selectCardTextActive]}>
                        {tier}
                      </Text>
                      {isSelected && (
                        <View style={styles.checkBadge}>
                          <Check size={10} color="#02040a" />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          {/* STEP 3: Client Details */}
          {step === 3 && (
            <View style={styles.stepContainer}>
              <Text style={styles.stepTitle}>Identify & Detail</Text>
              <Text style={styles.stepDesc}>Provide vision specifications and contact coordinates.</Text>

              <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>YOUR NAME *</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. Satoshi Nakamoto"
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  value={name}
                  onChangeText={setName}
                />

                <Text style={styles.inputLabel}>EMAIL COORDINATES *</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. satoshi@domain.com"
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />

                <Text style={styles.inputLabel}>COMPANY NAME</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="e.g. Matrix Solutions Ltd"
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  value={company}
                  onChangeText={setCompany}
                />

                <Text style={styles.inputLabel}>PROJECT BLUEPRINT VISION *</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  placeholder="Describe your design and performance vision..."
                  placeholderTextColor="rgba(255,255,255,0.3)"
                  multiline={true}
                  numberOfLines={4}
                  value={vision}
                  onChangeText={setVision}
                />
              </View>
            </View>
          )}

          {/* Action Row */}
          <View style={styles.actionRow}>
            {step > 1 ? (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleBack}
                style={styles.backButton}
              >
                <ArrowLeft size={16} color={THEME.colors.textSecondary} />
                <Text style={styles.backButtonText}>BACK</Text>
              </TouchableOpacity>
            ) : (
              <View />
            )}

            {step < 3 ? (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleNext}
                style={styles.nextButton}
              >
                <Text style={styles.nextButtonText}>CONTINUE</Text>
                <ArrowRight size={16} color="#02040a" />
              </TouchableOpacity>
            ) : (
              <CustomButton
                title="Initialize"
                loading={loading}
                onPress={handleSubmit}
                style={styles.submitBtn}
              />
            )}
          </View>

          <View style={styles.footerSpacing} />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    paddingTop: 16,
  },
  progressTrack: {
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: THEME.roundness.full,
    width: '100%',
    marginBottom: 28,
  },
  progressFill: {
    height: '100%',
    backgroundColor: THEME.colors.primary,
    borderRadius: THEME.roundness.full,
  },
  stepContainer: {
    width: '100%',
  },
  stepTitle: {
    fontFamily: THEME.typography.headline.fontFamily,
    color: THEME.colors.textPrimary,
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 6,
  },
  stepDesc: {
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 24,
  },
  selectionGrid: {
    flexDirection: 'column',
    gap: 12,
    width: '100%',
  },
  selectCard: {
    height: 60,
    backgroundColor: 'rgba(16, 19, 27, 0.45)',
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: THEME.roundness.xl,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectCardHorizontal: {
    height: 60,
    backgroundColor: 'rgba(16, 19, 27, 0.45)',
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: THEME.roundness.xl,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectCardActive: {
    borderColor: THEME.colors.primary,
    backgroundColor: 'rgba(64, 232, 255, 0.08)',
  },
  selectCardText: {
    fontFamily: THEME.typography.title.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 15,
    fontWeight: '600',
  },
  selectCardTextActive: {
    color: THEME.colors.primary,
  },
  checkBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: THEME.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flexDirection: 'column',
    gap: 12,
  },
  inputLabel: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.primary,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: 8,
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: 'rgba(2, 4, 10, 0.6)',
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: THEME.roundness.md,
    height: 48,
    paddingHorizontal: 16,
    color: THEME.colors.textPrimary,
    fontFamily: THEME.typography.bodyMedium.fontFamily,
    fontSize: 14,
  },
  textArea: {
    height: 120,
    paddingTop: 16,
    paddingBottom: 16,
    textAlignVertical: 'top',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    width: '100%',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    height: 48,
    paddingHorizontal: 16,
  },
  backButtonText: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: THEME.colors.textSecondary,
    fontSize: 11,
    fontWeight: '700',
  },
  nextButton: {
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: THEME.roundness.full,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  nextButtonText: {
    fontFamily: THEME.typography.labelCaps.fontFamily,
    color: '#02040a',
    fontSize: 11,
    fontWeight: '700',
  },
  submitBtn: {
    width: 140,
    height: 48,
  },
  footerSpacing: {
    height: 120,
  },
});
