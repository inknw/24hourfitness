'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import { useRef } from 'react'
import type { Group } from 'three'

function Dumbbell({ animate }: { animate: boolean }) {
  const ref = useRef<Group>(null)
  useFrame(({ clock }) => {
    if (ref.current && animate) ref.current.position.y = Math.sin(clock.elapsedTime * 0.65) * 0.09
  })
  return <group ref={ref} rotation={[0.2, 0.1, -0.45]}>
    <mesh rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.115, 0.115, 2.8, 32]} /><meshStandardMaterial color="#c4c6c1" metalness={0.93} roughness={0.26} /></mesh>
    {Array.from({ length: 23 }, (_, i) => <mesh key={i} position={[-0.55 + i * 0.05, 0, 0]} rotation={[0, Math.PI / 2, 0]}><torusGeometry args={[0.116, 0.006, 5, 20]} /><meshStandardMaterial color="#666863" metalness={0.8} roughness={0.5} /></mesh>)}
    {[-1, 1].map((side) => <group key={side} position={[side * 1.03, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
      <mesh><cylinderGeometry args={[0.64, 0.64, 0.64, 6, 1]} /><meshStandardMaterial color="#282b29" roughness={0.68} metalness={0.3} /></mesh>
      <mesh position={[0, 0.34, 0]}><cylinderGeometry args={[0.56, 0.56, 0.065, 6]} /><meshStandardMaterial color="#3e423b" roughness={0.45} metalness={0.45} /></mesh>
      <mesh position={[0, -0.34, 0]}><cylinderGeometry args={[0.56, 0.56, 0.065, 6]} /><meshStandardMaterial color="#34372f" roughness={0.45} metalness={0.45} /></mesh>
      {[-0.25, 0.25].map((y) => <mesh key={y} position={[0, y, 0]}><cylinderGeometry args={[0.647, 0.647, 0.035, 6]} /><meshStandardMaterial color="#d4f65a" roughness={0.4} metalness={0.25} /></mesh>)}
      <mesh position={[0, side * -0.39, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.24, 0.018, 8, 32]} /><meshStandardMaterial color="#d4f65a" metalness={0.3} roughness={0.4} /></mesh>
    </group>)}
  </group>
}

export default function EquipmentScene({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return <Canvas camera={{ position: [0, 1.2, 5.4], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} frameloop={reducedMotion ? 'demand' : 'always'} aria-label="Interactive 3D dumbbell. Drag to rotate.">
    <ambientLight intensity={1.2} />
    <directionalLight position={[3, 5, 4]} intensity={4} color="#f5f6e9" />
    <directionalLight position={[-3, 1, -2]} intensity={5} color="#d4f65a" />
    <pointLight position={[-2, -1, 4]} intensity={18} color="#ffffff" />
    <Dumbbell animate={!reducedMotion} />
    <ContactShadows position={[0, -1.3, 0]} opacity={0.45} scale={8} blur={2.7} far={4} frames={1} />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reducedMotion} autoRotateSpeed={0.65} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI * 0.75} />
  </Canvas>
}
