import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-zinc-100 text-2xlm">
      {progress.toFixed()} % loaded
    </Html>
  );
}
