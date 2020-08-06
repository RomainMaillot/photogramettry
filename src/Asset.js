import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Asset({ url, position, scale }) {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive position={position} scale={scale} rotation-y={135} object={gltf.scene} dispose={null} />
}

export default Asset;