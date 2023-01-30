import {
  KeyboardControls,
  OrbitControls,
  PointerLockControls,
  Sky,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Debug, Physics, RigidBody } from "@react-three/rapier";
import { Model } from "./Model";
import { Player } from "./Player";

export const Walking = () => {
  return (
    <div className=" w-full h-screen">
      <Canvas shadows camera={{ position: [8, 8, 2], fov: 35 }}>
        <ambientLight intensity={0.2} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Model />
        <mesh receiveShadow rotation-x={-Math.PI / 2}>
          <planeGeometry args={[5, 5]} />
          <meshPhongMaterial />
        </mesh>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
};

export const Test = () => {
  return (
    <div className=" w-full h-screen">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas shadows camera={{ fov: 45 }}>
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={0.2} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Debug />
            <Player />
            <Model />
            <RigidBody type="fixed" colliders={false}>
              <mesh
                receiveShadow
                position={[0, 0, 0]}
                rotation-x={-Math.PI / 2}
              >
                <planeGeometry args={[60, 60]} />
                <meshStandardMaterial color="green" />
              </mesh>
              <CuboidCollider position={[0, 0, 0]} args={[30, 3, 30]} />
            </RigidBody>
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};
