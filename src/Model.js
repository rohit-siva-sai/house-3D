import { Clone, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Model()
{
    const model = useGLTF('./house.glb')
    console.log(model);

    const house = useRef()
    useFrame((state,delta)=>{
    house.current.rotation.y += delta * 0.10
    })
    
    
    return <>
        {/* <planeGeometry args={ [ 12,2] } scale={10} position={[0,0,0]} /> */}
        {model && <Clone ref={house} object={ model.scene } scale={1} position={[0,-3.5,0]} castShadow receiveShadow  />}
    </>
}

useGLTF.preload('./splainpark.glb')