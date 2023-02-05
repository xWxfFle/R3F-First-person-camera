import {
  KeyboardControls,
  PointerLockControls,
  Stats,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
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
        <Canvas camera={{ fov: 50 }}>
          <Suspense fallback={<Loader />}>
            <Stats />
            <Physics gravity={[0, -30, 0]}>
              <Player />
              <Room />
              <RigidBody type="fixed" colliders={false}>
                <CuboidCollider position={[0, 0, 0]} args={[100, 2, 100]} />
              </RigidBody>
            </Physics>
            <PointerLockControls />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  );
};
