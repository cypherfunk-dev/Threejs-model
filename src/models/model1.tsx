import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";


export function Model() {
  const fileUrl = "/src/models/tester.glb";
  const gltf = useLoader(GLTFLoader, fileUrl);
  const mesh = useRef<Mesh>(null!);
  useFrame(() => {
    mesh.current.rotation.y += 0.008;
 });

  return (
    <primitive ref={mesh} object={gltf.scene} />
  );
}
