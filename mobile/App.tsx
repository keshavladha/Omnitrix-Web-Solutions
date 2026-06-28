import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
  Animated,
} from 'react-native';
import { Home, Briefcase, Sparkles, RefreshCw, AlertCircle } from 'lucide-react-native';
import { WebView } from 'react-native-webview';
import { THEME, BASE_URL } from './src/theme';
import { AmbientBackground } from './src/components/Background';
import { GlassPanel } from './src/components/GlassPanel';

const { width, height } = Dimensions.get('window');

type TabType = 'core' | 'craft' | 'strategy';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('core');
  const [isServerOnline, setIsServerOnline] = useState<boolean | null>(null);
  const [isCheckingServer, setIsCheckingServer] = useState(true);
  const [isAppLoading, setIsAppLoading] = useState(true);
  
  // Loading tracking per tab
  const [loadedTabs, setLoadedTabs] = useState<Record<TabType, boolean>>({
    core: false,
    craft: false,
    strategy: false,
  });

  // Animated values
  const loadingPulse = useRef(new Animated.Value(0.4)).current;
  const overlayOpacity = useRef(new Animated.Value(1)).current;

  // Next.js page urls
  const urls: Record<TabType, string> = {
    core: `${BASE_URL}/?app=true`,
    craft: `${BASE_URL}/work?app=true`,
    strategy: `${BASE_URL}/contact?app=true`,
  };

  // Perform server health check
  const checkServerHealth = async () => {
    if (Platform.OS === 'web') {
      setIsServerOnline(true);
      setIsCheckingServer(false);
      setIsAppLoading(false);
      return;
    }

    setIsCheckingServer(true);
    try {
      // Timeout the fetch in 4 seconds
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 4000);
      
      const response = await fetch(BASE_URL, {
        method: 'GET',
        signal: controller.signal,
        headers: { 'Cache-Control': 'no-cache' }
      });
      clearTimeout(id);
      
      if (response.status >= 200 && response.status < 400) {
        setIsServerOnline(true);
      } else {
        setIsServerOnline(false);
      }
    } catch (e) {
      console.log('Server health check failed:', e);
      setIsServerOnline(false);
    } finally {
      setIsCheckingServer(false);
    }
  };

  useEffect(() => {
    checkServerHealth();
  }, []);

  // Sync loading state animation
  useEffect(() => {
    if (isAppLoading || isCheckingServer) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(loadingPulse, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(loadingPulse, {
            toValue: 0.4,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      Animated.timing(overlayOpacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        // Keeps it off the layout completely after fading out
      });
    }
  }, [isAppLoading, isCheckingServer]);

  // Once active tab is loaded or if 3.5 seconds have elapsed, hide loading screen
  useEffect(() => {
    if (isServerOnline === false) {
      setIsAppLoading(false);
    } else if (isServerOnline === true) {
      if (loadedTabs[activeTab]) {
        setIsAppLoading(false);
      }
      
      // Fallback timeout to guarantee loading screen goes away
      const timeout = setTimeout(() => {
        setIsAppLoading(false);
      }, 3500);

      return () => clearTimeout(timeout);
    }
  }, [loadedTabs, activeTab, isServerOnline]);

  const markTabLoaded = (tab: TabType) => {
    setLoadedTabs((prev) => ({ ...prev, [tab]: true }));
    if (tab === activeTab) {
      setIsAppLoading(false);
    }
  };

  // Render standard iframe on web platforms, WebView on native
  const renderWebViewSlot = (tab: TabType) => {
    const isVisible = activeTab === tab;
    const url = urls[tab];

    if (Platform.OS === 'web') {
      return (
        <View
          key={tab}
          style={[
            styles.webviewContainer,
            isVisible ? styles.visibleContainer : styles.hiddenContainer,
          ]}
        >
          {React.createElement('iframe', {
            src: url,
            style: {
              width: '100%',
              height: '100%',
              border: 'none',
              backgroundColor: '#02040a',
            },
            onLoad: () => markTabLoaded(tab),
          })}
        </View>
      );
    }

    return (
      <View
        key={tab}
        style={[
          styles.webviewContainer,
          isVisible ? styles.visibleContainer : styles.hiddenContainer,
        ]}
      >
        <WebView
          source={{ uri: url }}
          style={{ flex: 1, backgroundColor: '#02040a' }}
          containerStyle={{ flex: 1 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          onLoadEnd={() => markTabLoaded(tab)}
          onError={() => setIsServerOnline(false)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <AmbientBackground />

      {/* Screen Panels Layout (Preloaded to preserve state) */}
      {isServerOnline === true && (
        <View style={styles.screensViewport}>
          {renderWebViewSlot('core')}
          {renderWebViewSlot('craft')}
          {renderWebViewSlot('strategy')}
        </View>
      )}

      {/* Offline Recovery Uplink View */}
      {isServerOnline === false && !isCheckingServer && (
        <SafeAreaView style={styles.fullscreenOverlay}>
          <View style={styles.offlineBox}>
            <GlassPanel style={styles.offlinePanel} glow={true} intensity={30}>
              <View style={styles.errorIconContainer}>
                <AlertCircle size={32} color={THEME.colors.error} />
              </View>
              <Text style={styles.offlineTitle}>UPLINK DISCONNECTED</Text>
              <Text style={styles.offlineDesc}>
                We are unable to establish a secure connection with the Omnitrix Mainframe at:
              </Text>
              <Text style={styles.offlineUrl}>{BASE_URL}</Text>
              <Text style={styles.offlineInstruction}>
                Please ensure the Next.js server is active by running "npm run dev" in the workspace.
              </Text>
              
              <TouchableOpacity
                style={styles.retryButton}
                activeOpacity={0.8}
                onPress={() => {
                  setIsCheckingServer(true);
                  checkServerHealth();
                }}
              >
                <RefreshCw size={16} color="#02040a" style={{ marginRight: 8 }} />
                <Text style={styles.retryButtonText}>RE-ESTABLISH UPLINK</Text>
              </TouchableOpacity>
            </GlassPanel>
          </View>
        </SafeAreaView>
      )}

      {/* Futuristic Portal Loading Overlay */}
      {(isCheckingServer || isAppLoading) && (
        <Animated.View 
          style={[
            styles.fullscreenOverlay, 
            { 
              opacity: overlayOpacity,
              backgroundColor: '#02040a',
              pointerEvents: (isCheckingServer || isAppLoading) ? 'auto' : 'none'
            }
          ]}
        >
          <AmbientBackground />
          <View style={styles.loadingContainer}>
            <Animated.View style={[styles.loaderFrame, { opacity: loadingPulse }]}>
              <View style={styles.loaderSpinner} />
            </Animated.View>
            <Animated.Text style={[styles.loadingTitle, { opacity: loadingPulse }]}>
              SYNCHRONIZING OMNITRIX PORTAL
            </Animated.Text>
            <Text style={styles.loadingSub}>
              {isCheckingServer ? 'PINGING SYS MAINFRAME...' : 'ESTABLISHING CYBER UPLINK...'}
            </Text>
          </View>
        </Animated.View>
      )}

      {/* Floating Cyber Capsule Bottom Navigation Bar */}
      {isServerOnline === true && (
        <View style={styles.navBarContainer} pointerEvents="box-none">
          <View style={styles.navBar}>
            <TouchableOpacity
              style={styles.navItem}
              activeOpacity={0.7}
              onPress={() => setActiveTab('core')}
            >
              <Home
                size={18}
                color={activeTab === 'core' ? THEME.colors.primary : THEME.colors.textSecondary}
              />
              <Text
                style={[
                  styles.navText,
                  activeTab === 'core' && styles.navTextActive,
                ]}
              >
                CORE
              </Text>
              {activeTab === 'core' && <View style={styles.activeDot} />}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              activeOpacity={0.7}
              onPress={() => setActiveTab('craft')}
            >
              <Briefcase
                size={18}
                color={activeTab === 'craft' ? THEME.colors.primary : THEME.colors.textSecondary}
              />
              <Text
                style={[
                  styles.navText,
                  activeTab === 'craft' && styles.navTextActive,
                ]}
              >
                CRAFT
              </Text>
              {activeTab === 'craft' && <View style={styles.activeDot} />}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              activeOpacity={0.7}
              onPress={() => setActiveTab('strategy')}
            >
              <Sparkles
                size={18}
                color={activeTab === 'strategy' ? THEME.colors.primary : THEME.colors.textSecondary}
              />
              <Text
                style={[
                  styles.navText,
                  activeTab === 'strategy' && styles.navTextActive,
                ]}
              >
                STRATEGY
              </Text>
              {activeTab === 'strategy' && <View style={styles.activeDot} />}
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02040a',
  },
  screensViewport: {
    flex: 1,
    position: 'relative',
  },
  webviewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  visibleContainer: {
    transform: [{ translateY: 0 }],
    opacity: 1,
    zIndex: 1,
  },
  hiddenContainer: {
    transform: [{ translateY: -height * 2 }],
    opacity: 0,
    zIndex: -1,
  },
  fullscreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  loaderFrame: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'rgba(64, 232, 255, 0.15)',
    borderTopColor: THEME.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  loaderSpinner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'rgba(47, 125, 255, 0.15)',
    borderBottomColor: THEME.colors.secondary,
  },
  loadingTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: THEME.colors.primary,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: THEME.colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  loadingSub: {
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    color: THEME.colors.textSecondary,
    fontSize: 10,
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  offlineBox: {
    paddingHorizontal: 24,
    width: '100%',
    maxWidth: 440,
    alignItems: 'center',
  },
  offlinePanel: {
    width: '100%',
    alignItems: 'center',
  },
  errorIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 180, 171, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 180, 171, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  offlineTitle: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-condensed',
    color: THEME.colors.error,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },
  offlineDesc: {
    color: THEME.colors.textSecondary,
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  offlineUrl: {
    color: THEME.colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    fontSize: 12,
    fontWeight: '700',
    backgroundColor: 'rgba(64, 232, 255, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: THEME.roundness.sm,
    borderWidth: 1,
    borderColor: 'rgba(64, 232, 255, 0.1)',
    marginBottom: 16,
  },
  offlineInstruction: {
    color: '#8a9ab0',
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: THEME.roundness.full,
    width: '100%',
    shadowColor: THEME.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  retryButtonText: {
    color: '#02040a',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  navBarContainer: {
    position: 'absolute',
    bottom: 24,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 900,
  },
  navBar: {
    flexDirection: 'row',
    width: width - 48,
    height: 64,
    backgroundColor: 'rgba(16, 19, 27, 0.85)',
    borderWidth: 1,
    borderColor: THEME.colors.border,
    borderRadius: THEME.roundness.full,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: THEME.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 12,
    minWidth: 80,
  },
  navText: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-medium',
    fontSize: 9,
    fontWeight: '700',
    color: THEME.colors.textSecondary,
    letterSpacing: 0.5,
    marginTop: 4,
  },
  navTextActive: {
    color: THEME.colors.primary,
    fontWeight: '800',
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: THEME.colors.primary,
    position: 'absolute',
    bottom: 4,
    shadowColor: THEME.colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
});
