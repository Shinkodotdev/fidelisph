import { Suspense, lazy } from "react";

import { Canvas } from "@react-three/fiber";

import {
  Environment,
  Float,
  ContactShadows,
} from "@react-three/drei";

const BookModel = lazy(() =>
  import("../BookModel")
);

export default function HeroCanvas() {
  return (
    <Canvas
      shadows={false}
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference:
          "high-performance",
      }}
      camera={{
        position: [0, 0, 6],
        fov: 35,
      }}
      className="relative z-10 h-full w-full pointer-events-none"
    >
      <ambientLight intensity={1.3} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.8}
      />

      <pointLight
        position={[0, 3, 2]}
        intensity={1.6}
        color="#d6b26f"
      />

      <Suspense fallback={null}>
        <Environment preset="sunset" />

        <Float
          speed={1}
          rotationIntensity={0}
          floatIntensity={0.5}
        >
          <BookModel />
        </Float>

        <ContactShadows
          position={[0, -2.2, 0]}
          opacity={0.28}
          scale={8}
          blur={2}
          far={4}
        />
      </Suspense>
    </Canvas>
  );
}