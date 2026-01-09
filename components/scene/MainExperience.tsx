import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Experience } from './Experience';

export const MainExperience = () => {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas
                shadows
                camera={{ position: [0, 2, 5], fov: 30 }}
                gl={{ antialias: true }}
            >
                <color attach="background" args={["#ECE9E1"]} />
                <ScrollControls pages={4} damping={0.1}>
                    <Experience />
                </ScrollControls>
            </Canvas>
        </div>
    );
};
