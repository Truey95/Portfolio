import React, { useEffect, useRef, useState } from "react";
import { FaHandPaper, FaHandPointer } from "react-icons/fa";

// Hand tracking scroll component
export default function HandScroll() {
    const [isActive, setIsActive] = useState(false);
    const [isDetected, setIsDetected] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const videoRef = useRef<HTMLVideoElement>(null);
    const handsRef = useRef<any>(null);
    const cameraRef = useRef<any>(null);
    const scrollRef = useRef<number>(0);
    const rafRef = useRef<number | null>(null);
    const isActiveRef = useRef(false);

    const performScroll = () => {
        if (scrollRef.current !== 0 && isActiveRef.current) {
            window.scrollBy({ top: scrollRef.current, behavior: "auto" });
        }
        rafRef.current = requestAnimationFrame(performScroll);
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        const initHands = async () => {
            try {
                const handsPkg = await import("@mediapipe/hands");
                const cameraPkg = await import("@mediapipe/camera_utils");

                const HandsClass = (handsPkg as any).Hands || (window as any).Hands;
                const CameraClass = (cameraPkg as any).Camera || (window as any).Camera;

                if (!HandsClass || !CameraClass) return;

                const hands = new HandsClass({
                    locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
                });

                hands.setOptions({
                    maxNumHands: 1,
                    modelComplexity: 0,
                    minDetectionConfidence: 0.5,
                    minTrackingConfidence: 0.5,
                });

                hands.onResults((results: any) => {
                    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
                        setIsDetected(true);
                        const landmark = results.multiHandLandmarks[0][9]; // Middle finger MCP

                        // Mirrored X because camera is usually flipped
                        setPos({
                            x: (1 - landmark.x) * window.innerWidth,
                            y: landmark.y * window.innerHeight
                        });

                        // Scroll logic: Deadzone 0.35 to 0.65
                        let speed = 0;
                        if (landmark.y < 0.35) {
                            speed = -Math.pow((0.35 - landmark.y) * 15, 2) - 5;
                        } else if (landmark.y > 0.65) {
                            speed = Math.pow((landmark.y - 0.65) * 15, 2) + 5;
                        }
                        scrollRef.current = speed;
                    } else {
                        setIsDetected(false);
                        scrollRef.current = 0;
                    }
                });

                handsRef.current = hands;

                if (videoRef.current) {
                    cameraRef.current = new CameraClass(videoRef.current, {
                        onFrame: async () => {
                            if (handsRef.current && videoRef.current && isActiveRef.current) {
                                await handsRef.current.send({ image: videoRef.current });
                            }
                        },
                        width: 640,
                        height: 480,
                    });
                }
            } catch (err) {
                console.error("MediaPipe Init Error:", err);
            }
        };

        initHands();
        rafRef.current = requestAnimationFrame(performScroll);

        return () => {
            if (cameraRef.current) cameraRef.current.stop();
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const toggleTracking = async () => {
        if (!isActive) {
            try {
                if (!cameraRef.current) {
                    alert("Hand tracking is initializing, please wait a moment.");
                    return;
                }
                await cameraRef.current.start();
                setIsActive(true);
                isActiveRef.current = true;
            } catch (err) {
                console.error("Camera access denied", err);
                alert("Camera access is required for hand tracking. Please enable it in your browser settings.");
            }
        } else {
            if (cameraRef.current) cameraRef.current.stop();
            setIsActive(false);
            isActiveRef.current = false;
            setIsDetected(false);
            scrollRef.current = 0;
        }
    };

    return (
        <>
            <video ref={videoRef} className="hidden" playsInline muted />

            {/* Hand Indicator */}
            {isActive && isDetected && (
                <div
                    className={`hand-indicator ${isDetected ? 'hand-active' : ''}`}
                    style={{ left: pos.x, top: pos.y }}
                />
            )}

            {/* Toggle Button */}
            <div className="fixed bottom-8 right-8 z-[101]">
                <button
                    onClick={toggleTracking}
                    className={`group relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 
            ${isActive ? 'bg-white text-sand-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'bg-sand-black text-white hover:scale-105'}
            shadow-embossed overflow-hidden border border-gray-900/50`}
                    title={isActive ? "Disable Hand Scroll" : "Enable Hand Scroll"}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
                    {isActive ? (
                        <FaHandPointer className="text-2xl animate-pulse" />
                    ) : (
                        <FaHandPaper className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}

                    {/* Label that appears on hover */}
                    <span className="absolute right-20 px-4 py-2 rounded-lg bg-sand-black/80 backdrop-blur-md text-xs uppercase tracking-[0.2em] font-luxury text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-900/50">
                        {isActive ? "Tracking Active" : "Hand Scrolling"}
                    </span>
                </button>
            </div>
        </>
    );
}
