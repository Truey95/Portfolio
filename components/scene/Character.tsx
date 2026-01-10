import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

export const Character = () => {
    const group = useRef<THREE.Group>(null);

    // Clay-like material properties
    const skinMaterial = {
        color: "#4B3621", // Darker skin tone
        roughness: 0.8,
        metalness: 0.1,
    };

    const clothesMaterial = {
        color: "#F08A24", // Accent orange for shirt
        roughness: 0.9,
        metalness: 0.0,
    };

    const pantsMaterial = {
        color: "#0A192F", // Dark blue for pants
        roughness: 1,
        metalness: 0,
    }

    useFrame((state) => {
        if (group.current) {
            // Subtle breathing animation
            const time = state.clock.getElapsedTime();
            group.current.position.y = Math.sin(time * 0.5) * 0.05;
        }
    });

    return (
        <group ref={group}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Head */}
                <mesh position={[0, 1.6, 0]} castShadow>
                    <sphereGeometry args={[0.2, 32, 32]} />
                    <meshStandardMaterial {...skinMaterial} />
                </mesh>

                {/* Torso */}
                <mesh position={[0, 1.1, 0]} castShadow>
                    <capsuleGeometry args={[0.25, 0.5, 4, 16]} />
                    <meshStandardMaterial {...clothesMaterial} />
                </mesh>

                {/* Left Arm */}
                <mesh position={[-0.4, 1.2, 0]} rotation={[0, 0, 0.2]} castShadow>
                    <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
                    <meshStandardMaterial {...skinMaterial} />
                </mesh>

                {/* Right Arm */}
                <mesh position={[0.4, 1.2, 0]} rotation={[0, 0, -0.2]} castShadow>
                    <capsuleGeometry args={[0.08, 0.4, 4, 8]} />
                    <meshStandardMaterial {...skinMaterial} />
                </mesh>

                {/* Left Leg */}
                <mesh position={[-0.15, 0.5, 0]} castShadow>
                    <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
                    <meshStandardMaterial {...pantsMaterial} />
                </mesh>

                {/* Right Leg */}
                <mesh position={[0.15, 0.5, 0]} castShadow>
                    <capsuleGeometry args={[0.1, 0.6, 4, 8]} />
                    <meshStandardMaterial {...pantsMaterial} />
                </mesh>

                {/* Feet */}
                <mesh position={[-0.15, 0.1, 0]} castShadow>
                    <boxGeometry args={[0.12, 0.1, 0.2]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[0.15, 0.1, 0]} castShadow>
                    <boxGeometry args={[0.12, 0.1, 0.2]} />
                    <meshStandardMaterial color="#333" />
                </mesh>
            </Float>
        </group>
    );
};
