"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface PhotoSphereProps {
    onEnter: () => void;
}

const PhotoSphere: React.FC<PhotoSphereProps> = ({ onEnter }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const isZoomingRef = useRef(false);

    useEffect(() => {
        if (!mountRef.current) return;

        // --- 1. Scene Setup ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // --- 2. Create Group ---
        const globeGroup = new THREE.Group();
        scene.add(globeGroup);

        // --- 3. Add Cards (Planes) ---
        const cardCount = 90;
        const radius = 5;
        const textureLoader = new THREE.TextureLoader();
        const cards: THREE.Mesh[] = [];

        for (let i = 0; i < cardCount; i++) {
            const texture = textureLoader.load(`https://picsum.photos/200/120?random=${i}`);
            const material = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide
            });
            const geometry = new THREE.PlaneGeometry(0.8, 0.5);
            const card = new THREE.Mesh(geometry, material);

            // Spherical Distribution Math
            const phi = Math.acos(-1 + (2 * i) / cardCount);
            const theta = Math.sqrt(cardCount * Math.PI) * phi;

            card.position.x = radius * Math.sin(phi) * Math.cos(theta);
            card.position.y = radius * Math.sin(phi) * Math.sin(theta);
            card.position.z = radius * Math.cos(phi);

            card.lookAt(0, 0, 0);
            globeGroup.add(card);
            cards.push(card);
        }

        camera.position.z = 12;

        // --- 4. Interaction Logic ---
        let isDragging = false;
        let previousMouseX = 0;
        let previousMouseY = 0;
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const handleMouseDown = (e: MouseEvent) => {
            isDragging = true;
            previousMouseX = e.clientX;
            previousMouseY = e.clientY;
        };
        const handleMouseUp = (e: MouseEvent) => {
            if (isDragging && !isZoomingRef.current) {
                const deltaX = Math.abs(e.clientX - previousMouseX);
                const deltaY = Math.abs(e.clientY - previousMouseY);

                // If it was a click (not a drag)
                if (deltaX < 5 && deltaY < 5) {
                    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

                    raycaster.setFromCamera(mouse, camera);
                    const intersects = raycaster.intersectObjects(cards);

                    if (intersects.length > 0) {
                        isZoomingRef.current = true;
                        const clickedCard = intersects[0].object;
                        // Target position is very close to the card
                        const targetPos = clickedCard.position.clone().normalize().multiplyScalar(radius + 1);
                        animateToPortfolio(targetPos);
                    }
                }
            }
            isDragging = false;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && !isZoomingRef.current) {
                const deltaX = e.clientX - previousMouseX;
                const deltaY = e.clientY - previousMouseY;

                globeGroup.rotation.y += deltaX * 0.005;
                globeGroup.rotation.x += deltaY * 0.005;

                previousMouseX = e.clientX;
                previousMouseY = e.clientY;
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (isZoomingRef.current) return;
            camera.position.z += e.deltaY * 0.01;
            camera.position.z = Math.max(5, Math.min(20, camera.position.z));
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animateToPortfolio = (targetPos: THREE.Vector3) => {
            const duration = 1000; // 1 second
            const startTime = performance.now();
            const startPos = camera.position.clone();

            const animateZoom = (time: number) => {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing circIn
                const easeProgress = 1 - Math.sqrt(1 - Math.pow(progress, 2));

                camera.position.lerpVectors(startPos, targetPos, easeProgress);
                camera.lookAt(0, 0, 0);

                if (progress < 1) {
                    requestAnimationFrame(animateZoom);
                } else {
                    onEnter();
                }
            };
            requestAnimationFrame(animateZoom);
        };

        // Events attachment
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('resize', handleResize);

        // --- 5. Animation Loop ---
        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            if (!isDragging && !isZoomingRef.current) {
                globeGroup.rotation.y += 0.002;
            }
            renderer.render(scene, camera);
        };
        animate();

        // --- Cleanup ---
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            mountRef.current?.removeChild(renderer.domElement);
            scene.clear();
            renderer.dispose();
        };
    }, [onEnter]);

    return (
        <main className="relative w-full h-screen overflow-hidden bg-[#f8f9fa]">
            <div id="header" className="absolute top-10 w-full text-center z-10">
                <h1 className="font-bold text-2xl tracking-[10px] uppercase text-gray-800 drop-shadow-sm">
                    3D Showcase
                </h1>
                <p className="text-gray-400 mt-2 text-xs tracking-widest uppercase">Click any memory to explore</p>
            </div>

            <div ref={mountRef} className="block w-full h-full cursor-pointer" />

            <div className="absolute bottom-10 w-full text-center text-gray-400 text-xs pointer-events-none tracking-widest">
                DRAG TO ROTATE &bull; SCROLL TO ZOOM &bull; CLICK TO ENTER
            </div>
        </main>
    );
};

export default PhotoSphere;