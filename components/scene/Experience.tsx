import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, MeshDistortMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

export const Experience = () => {
    const scroll = useScroll();
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        const offset = scroll.offset;
        // Basic camera/scene transition logic based on scroll
        if (group.current) {
            group.current.rotation.y = offset * Math.PI * 0.5;
            group.current.position.y = -offset * 2;
        }
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 2, 3]} intensity={1.5} castShadow />
            <Environment preset="city" />

            <group ref={group}>
                {/* Placeholder for the "Clay" character/objects */}
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[0, 0, 0]} castShadow>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#F08A24" roughness={0.3} metalness={0.1} />
                    </mesh>
                </Float>

                {/* Adding some "clay" floor or base */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
                    <planeGeometry args={[10, 10]} />
                    <meshStandardMaterial color="#ECE9E1" />
                </mesh>
            </group>
        </>
    );
};
