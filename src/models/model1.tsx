import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Mesh } from "three";

export function Model() {
  const fileUrl = "/src/models/modelDraco.gltf";

  const gltf = useLoader(GLTFLoader, fileUrl, (loader) => {
    const dracoLoader = new DRACOLoader();
    // Configura el path a los archivos del decodificador Draco
    dracoLoader.setDecoderPath( '../node_modules/three/examples/jsm/libs/draco/gltf/' );    // Especifica los archivos del decodificador
    dracoLoader.setDecoderConfig({ type: 'wasm' }); // Puedes usar 'js' o 'wasm'
    loader.setDRACOLoader(dracoLoader);
  });

  const mesh = useRef<Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.008;
    }
  });

  return (
    <primitive ref={mesh} object={gltf.scene} />
  );
}
