import { useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";

import {
  forwardRef,
  useMemo,
  useRef,
} from "react";

const BookModel = forwardRef(
  function BookModel(
    { mouse },
    ref
  ) {
    const group = useRef();

    const { scene } = useGLTF(
      "/bible.glb"
    );

    const cloned = useMemo(
      () => scene.clone(),
      [scene]
    );

    useFrame((state) => {
      if (!group.current) return;

      const t =
        state.clock.getElapsedTime();

      group.current.position.y =
        Math.sin(t * 1.4) * 0.04

      group.current.rotation.z =
        Math.sin(t * 0.5) * 0.02;

      if (mouse?.current) {
        group.current.rotation.y +=
          (
            mouse.current.x * 1 -
            group.current.rotation.y
          ) *
          0.04;

        group.current.rotation.x +=
          (
            -mouse.current.y * 0.1 -
            group.current.rotation.x
          ) *
          0.04;
      }

      group.current.rotation.y +=
        0.002;
    });

    return (
      <group
        ref={group}
        scale={0.2}
        position={[0, -0.15, 0]}
        rotation={[0.05, -0.4, 0]}
      >
        <primitive
          ref={ref}
          object={cloned}
        />
      </group>
    );
  }
);

export default BookModel;

useGLTF.preload("/bible.glb");