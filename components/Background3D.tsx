"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarField: React.FC = () => {
    const starsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (starsRef.current) {
            starsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            starsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
        }
    });

    const starPositions = React.useMemo(() => {
        const positions = new Float32Array(1000 * 3);
        for (let i = 0; i < 1000; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }
        return positions;
    }, []);

    return (
        <points ref={starsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={starPositions.length / 3}
                    array={starPositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#ffffff" sizeAttenuation />
        </points>
    );
};

const Background3D: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.3} />
                <StarField />
            </Canvas>
        </div>
    );
};

export default Background3D;
