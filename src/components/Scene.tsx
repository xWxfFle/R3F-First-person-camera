import { Box, OrbitControls, Stage, Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import { useState } from "react";

export const Scene = () => {
  const clicked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value.replace(/ /g, "\n"));
  };
  const [text, setText] = useState(`Влад,\nКак дела?`);
  return (
    <div className=" w-full h-screen bg-indigo-900">
      <Canvas shadows camera={{ position: [0, 0.5, 2], fov: 35 }}>
        <EffectComposer>
          <Pixelation
            granularity={0} // pixel granularity
          />
        </EffectComposer>
        <Stage preset="rembrandt" adjustCamera={1.75} environment="city">
          <Text3D
            rotation={[-0.5, -0.25, 0]}
            curveSegments={32}
            bevelEnabled
            bevelSize={0.04}
            bevelThickness={0.1}
            height={0.5}
            lineHeight={0.6}
            letterSpacing={-0.06}
            size={1.5}
            font="/font.json"
          >
            {text}
            <meshNormalMaterial />
          </Text3D>
        </Stage>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <input type="text" className="bg-slate-500" onChange={clicked} />
    </div>
  );
};
