import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Box(props) {

  const mesh = useRef()
  
 
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.02))
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [0.5, 0.5, 0.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'blue' : 'darkgreen'} />
    </mesh>
  )
}

function Hom () {

    return (
      <div className="homepageCanvas">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-3, 0, 0]} />
          <Box position={[-1, 0, 0]} />
          <Box position={[1, 0, 0]} />
          <Box position={[3, 0, 0]} />
        </Canvas>
      </div>

    )
}
export default Hom;