import React from "react";
import { useGLTF } from "@react-three/drei";

function Model({ src, material }) {
  const model = useGLTF(src);
  const scene = React.useMemo(() => {
    return model.scene.clone();
  }, [model]);
  return <primitive object={scene} material={material} />;
}
export default Model;
