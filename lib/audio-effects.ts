/**
 * Programmatic Web Audio Synthesizers for Immersive Sci-Fi Micro-Feedback
 * 
 * Synthesizes high-fidelity futuristic blips and swishes directly on the client's
 * hardware soundcard. This yields 0-bytes download overhead, 100% offline capability,
 * and absolute zero network latency.
 */

let globalMuted = false;

// Initialize mute state from localStorage safely on the client
if (typeof window !== "undefined") {
  globalMuted = localStorage.getItem("cyber_mute_state") === "true";
}

export function setMuteState(muted: boolean) {
  globalMuted = muted;
  if (typeof window !== "undefined") {
    localStorage.setItem("cyber_mute_state", muted ? "true" : "false");
  }
}

export function getMuteState(): boolean {
  return globalMuted;
}

/**
 * Synthesizes a soft, clean high-tech select/click sound.
 * Linear frequency sweep starting at 950Hz down to 180Hz over 60ms.
 */
export function playCyberClick() {
  if (typeof window === "undefined" || globalMuted) return;

  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    // Slide tone rapidly to create a clean, mechanical click
    osc.frequency.setValueAtTime(950, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.06);

    // Microscopic soft envelope (extremely subtle, no pop)
    gain.gain.setValueAtTime(0.03, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  } catch (error) {
    // Graceful fallback for browser autoplay blocks
  }
}

/**
 * Synthesizes a microscopic holographic hover swish.
 * Soft sine tone at 1350Hz sliding down to 720Hz over 35ms.
 */
export function playCyberHover() {
  if (typeof window === "undefined" || globalMuted) return;

  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(1350, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(720, ctx.currentTime + 0.035);

    // Low decibel hover envelope
    gain.gain.setValueAtTime(0.008, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.035);
  } catch (error) {
    // Safely ignore autoplay restrictions on passive hovers
  }
}
