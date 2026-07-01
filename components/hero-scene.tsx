"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import * as THREE from "three";

// ── Floating Glass Orb ──
function GlassOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={[2.5, 0.5, -1]} scale={1.8}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          ior={1.5}
          color="#4080ff"
          roughness={0.1}
          transmission={0.95}
        />
      </mesh>
    </Float>
  );
}

// ── Particle Cloud ──
function ParticleCloud({ count = 3000 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.015) * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.4}
        color="#8ab4f8"
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ── Wireframe Grid Floor ──
function GridFloor() {
  return (
    <group position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper
        args={[60, 60, "#1a2030", "#0d1117"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

// ── Scroll-linked Camera Controller ──
function ScrollCamera() {
  const { camera } = useThree();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });
  const cameraZ = useTransform(smoothProgress, [0, 0.3], [8, 14]);
  const cameraY = useTransform(smoothProgress, [0, 0.3], [0, 2]);

  useFrame(() => {
    const z = cameraZ.get();
    const y = cameraY.get();
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, y, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ── Mouse-interactive Point Light ──
function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    if (!lightRef.current) return;
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, x, 0.08);
    lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, y, 0.08);
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 5]}
      intensity={0.8}
      color="#60a5fa"
      distance={20}
      decay={2}
    />
  );
}

// ── Secondary Floating Shape ──
function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[-3, -1, -3]} scale={0.8}>
        <torusGeometry args={[1, 0.3, 16, 48]} />
        <meshStandardMaterial
          color="#1e293b"
          metalness={0.9}
          roughness={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

// ── Main Scene Content ──
function SceneContent() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} color="#94a3b8" />
      <directionalLight position={[5, 8, 5]} intensity={0.4} color="#e2e8f0" />
      <MouseLight />

      {/* Environment for reflections */}
      <Environment preset="night" />

      {/* Objects */}
      <GlassOrb />
      <FloatingTorus />
      <ParticleCloud />
      <GridFloor />

      {/* Camera */}
      <ScrollCamera />

      {/* Fog */}
      <fog attach="fog" args={["#030305", 8, 30]} />
    </>
  );
}

// ── Exported Component ──
export function HeroScene() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on SSR or if user prefers reduced motion
  if (!mounted || shouldReduceMotion) return null;

  return (
    <div
      className="absolute inset-0 -z-5"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
