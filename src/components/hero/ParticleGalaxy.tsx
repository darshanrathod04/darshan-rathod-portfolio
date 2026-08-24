import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);

  const sphere = useMemo(() => {
    const positions = new Float32Array(3000);

    for (let i = 0; i < 1000; i++) {
      const r = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.015;

    ref.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#67e8f9"
        size={0.045}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleGalaxy() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <Stars />
      </Canvas>
    </div>
  );
}