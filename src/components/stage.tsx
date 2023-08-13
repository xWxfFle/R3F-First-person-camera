import { KeyboardControls, PointerLockControls, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { Suspense } from 'react'
import { Loading } from './loading'
import { Player } from '../models/player'
import { Room } from '../models/room'

export function Stage() {
  return (
    <div className=' w-screen h-screen'>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W', 'ц', 'Ц'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S', 'ы', 'Ы'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A', 'ф', 'Ф'] },
          {
            name: 'right',
            keys: ['ArrowRight', 'd', 'D', 'в', 'В'],
          },
          { name: 'jump', keys: ['Space'] },
        ]}
      >
        <Canvas camera={{ fov: 50 }}>
          <Suspense fallback={<Loading />}>
            <Stats />
            <Physics gravity={[0, -30, 0]}>
              <Player />
              <Room />
              <RigidBody type='fixed' colliders={false}>
                <CuboidCollider position={[0, 0, 0]} args={[100, 2, 100]} />
              </RigidBody>
            </Physics>
            <PointerLockControls />
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </div>
  )
}
