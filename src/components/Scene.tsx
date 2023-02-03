import { KeyboardControls, PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Debug, Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import { Loader } from "./Loader";
import { Player } from "./Player";
import { Room } from "./Room";

export const Scene = () => {
  return (
    <div className=" w-full h-screen bg-zinc-900">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W", "ц", "Ц"] },
          { name: "backward", keys: ["ArrowDown", "s", "S", "ы", "Ы"] },
          { name: "left", keys: ["ArrowLeft", "a", "A", "ф", "Ф"] },
          {
            name: "right",
            keys: ["ArrowRight", "d", "D", "в", "В"],
          },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas shadows camera={{ fov: 45 }}>
          <Suspense fallback={<Loader />}>
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={0.1} />
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
            <Physics gravity={[0, -30, 0]}>
              <Player />
              <Room />
              <RigidBody type="fixed" colliders={false}>
                <mesh
                  receiveShadow
                  position={[0, 0, 0]}
                  rotation-x={-Math.PI / 2}
                >
                  <planeGeometry args={[100, 100]} />
                  <meshStandardMaterial color="green" />
                </mesh>
                <CuboidCollider position={[0, 0, 0]} args={[30, 3, 30]} />
              </RigidBody>
            </Physics>
            <PointerLockControls />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
};
