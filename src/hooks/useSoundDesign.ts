import { useCallback, useEffect, useRef, useState } from 'react';

export function useSoundDesign() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isMutedRef = useRef<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sound_muted') === 'true';
    }
    return false;
  });

  const ambientNodeRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState<boolean>(false);

  useEffect(() => {
    isMutedRef.current = isMuted;
    if (typeof window !== 'undefined') {
      localStorage.setItem('sound_muted', isMuted ? 'true' : 'false');
    }
    if (isMuted && ambientNodeRef.current) {
      stopAmbient();
    }
  }, [isMuted]);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  }, []);

  useEffect(() => {
    const handleFirstInteraction = () => {
      initAudio();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [initAudio]);

  const playSound = useCallback((type: 'hover' | 'click' | 'type' | 'boot') => {
    if (isMutedRef.current) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) audioCtxRef.current = new AudioContext();
      }
      if (!audioCtxRef.current) return;
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'hover') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.03);
        gain.gain.setValueAtTime(0.002, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
        osc.start();
        osc.stop(ctx.currentTime + 0.03);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.002, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } else if (type === 'type') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(120, ctx.currentTime);
        gain.gain.setValueAtTime(0.002, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
      } else if (type === 'boot') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(50, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(300, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.008, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch {
      // Silently fail if audio is disabled
    }
  }, []);

  const toggleAmbient = useCallback(() => {
    if (isAmbientPlaying) {
      stopAmbient();
    } else {
      startAmbient();
    }
  }, [isAmbientPlaying]);

  const startAmbient = useCallback(() => {
    initAudio();
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (ambientNodeRef.current) {
      try {
        ambientNodeRef.current.osc1.stop();
        ambientNodeRef.current.osc2.stop();
      } catch {}
      ambientNodeRef.current = null;
    }

    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note warm drone

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110.5, ctx.currentTime); // Subtle binaural beat / harmonic shimmer

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.004, ctx.currentTime + 4.0); // Extremely subtle, slow elegant fade in

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      ambientNodeRef.current = { osc1, osc2, gain };
      setIsAmbientPlaying(true);
    } catch {}
  }, [initAudio]);

  const stopAmbient = useCallback(() => {
    if (!ambientNodeRef.current || !audioCtxRef.current) {
      setIsAmbientPlaying(false);
      return;
    }
    try {
      const { osc1, osc2, gain } = ambientNodeRef.current;
      const ctx = audioCtxRef.current;
      gain.gain.setValueAtTime(gain.gain.value, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
      setTimeout(() => {
        try {
          osc1.stop();
          osc2.stop();
        } catch {}
      }, 1250);
    } catch {}
    ambientNodeRef.current = null;
    setIsAmbientPlaying(false);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  return {
    playSound,
    isMuted,
    toggleMute,
    isAmbientPlaying,
    toggleAmbient,
  };
}
