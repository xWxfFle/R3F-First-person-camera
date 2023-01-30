import { useAnimations, useFBX } from "@react-three/drei";
import { useEffect } from "react";

export const Model = () => {
  const fbx = useFBX("paladin.fbx");
  const { animations } = useFBX("Mma Kick.fbx");
  const { actions, ref } = useAnimations(animations);
  useEffect(() => {
    actions["mixamo.com"]?.play();
  });
  return <primitive object={fbx} ref={ref} scale={0.03} />;
};
