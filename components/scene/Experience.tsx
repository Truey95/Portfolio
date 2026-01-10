import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Character } from './Character';

export const Experience = () => {
    const scroll = useScroll();
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        const offset = scroll.offset;
        if (group.current) {
            group.current.rotation.y = offset * Math.PI;
            group.current.position.x = -offset * 5;
        }
    });

    return (
        <>
            <ambientLight intensity={0.7} />
            <spotLight position={[5, 10, 5]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <Environment preset="studio" />

            <group ref={group}>
                {/* Character */}
                <group position={[1.5, -0.5, 0]} scale={1.2}>
                    <Character />
                </group>

                {/* Clay Desk */}
                <mesh position={[1.5, -0.6, 0.5]} receiveShadow castShadow>
                    <boxGeometry args={[1.5, 0.1, 0.8]} />
                    <meshStandardMaterial color="#D2B48C" roughness={0.8} />
                </mesh>

                {/* Desk Legs */}
                <mesh position={[0.8, -1, 0.1]} castShadow>
                    <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                    <meshStandardMaterial color="#8B4513" />
                </mesh>
                <mesh position={[2.2, -1, 0.1]} castShadow>
                    <cylinderGeometry args={[0.05, 0.05, 0.8]} />
                    <meshStandardMaterial color="#8B4513" />
                </mesh>

                {/* Floor */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
                    <planeGeometry args={[100, 100]} />
                    <meshStandardMaterial color="#ECE9E1" roughness={1} />
                </mesh>
            </group>
        </>
    );
};
