import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (group.current) {
      group.current.rotation.y += 0.0025;
      group.current.rotation.x = Math.sin(t * 0.4) * 0.08;
    }

    if (ring1.current) ring1.current.rotation.z += 0.004;
    if (ring2.current) ring2.current.rotation.x -= 0.003;
    if (ring3.current) ring3.current.rotation.y += 0.002;
  });

  return (
    <group ref={group}>
      {/* Inner glowing sphere */}
      <mesh>
        <icosahedronGeometry args={[1.15, 2]} />
        <meshStandardMaterial
          color="#6D5DF6"
          emissive="#4F46E5"
          emissiveIntensity={2.6}
          metalness={1}
          roughness={0.08}
        />
      </mesh>

      {/* Glass outer shell */}
      <mesh scale={1.28}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#7DD3FC"
          transmission={1}
          roughness={0}
          thickness={0.5}
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Orbit Ring 1 */}
      <mesh ref={ring1}>
        <torusGeometry args={[1.7, 0.02, 16, 180]} />
        <meshBasicMaterial color="#22D3EE" />
      </mesh>

      {/* Orbit Ring 2 */}
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.15, 0.015, 16, 180]} />
        <meshBasicMaterial color="#8B5CF6" />
      </mesh>

      {/* Orbit Ring 3 */}
      <mesh ref={ring3} rotation={[0.8, 0.4, 0]}>
        <torusGeometry args={[2.55, 0.012, 16, 180]} />
        <meshBasicMaterial color="#60A5FA" />
      </mesh>

      {/* Floating Nodes */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const r = 2.45;

        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * r,
              Math.sin(angle) * 0.4,
              Math.sin(angle) * r,
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#22D3EE" : "#A78BFA"}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function IntelligenceCore() {
  return (
    <div className="relative h-[560px] w-full">
      {/* Glow behind canvas */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[90px]" />

      <Canvas camera={{ position: [0, 0, 6], fov: 42 }}>
        <ambientLight intensity={1.3} />

        <pointLight position={[4, 4, 4]} intensity={2.8} color="#22D3EE" />

        <pointLight
          position={[-4, -3, -3]}
          intensity={2.3}
          color="#8B5CF6"
        />

        <Float speed={2} rotationIntensity={0.25} floatIntensity={0.5}>
          <Core />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
        />
      </Canvas>

      {/* Labels */}
      <div className="absolute left-6 top-24 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
        Memory
      </div>

      <div className="absolute right-6 top-36 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
        Reasoning
      </div>

      <div className="absolute bottom-28 left-8 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200 backdrop-blur-xl">
        Planning
      </div>

      <div className="absolute bottom-20 right-8 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 backdrop-blur-xl">
        Runtime
      </div>

      {/* Bottom badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-5 py-2 text-xs tracking-[0.25em] text-slate-300 uppercase backdrop-blur-xl">
        SHREE AI OS CORE
      </div>
    </div>
  );
}