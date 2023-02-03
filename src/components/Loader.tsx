import { Html, useProgress } from "@react-three/drei";

export function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="text-zinc-100 text-xl border-4 border-sky-900 p-2 rounded-sm">
      {progress.toFixed()} % loaded
    </Html>
  );
}
