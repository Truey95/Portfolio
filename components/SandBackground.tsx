import React from 'react';

export default function SandBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-sand-black pointer-events-none">
            {/* Base Sand Grain Layer */}
            <div className="absolute inset-0 opacity-[0.6] mix-blend-overlay z-[2]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Micro-Glitter/Sparkle (Toned down) */}
            <div className="absolute inset-0 z-[3] opacity-20">
                <style jsx>{`
                    @keyframes sparkle {
                        0%, 100% { opacity: 0.1; transform: scale(0.8); }
                        50% { opacity: 0.8; transform: scale(1.2); }
                    }
                    .sparkle {
                        position: absolute;
                        width: 1.5px;
                        height: 1.5px;
                        background: white;
                        border-radius: 50%;
                        box-shadow: 0 0 4px rgba(255,255,255,1);
                    }
                `}</style>
                {[...Array(80)].map((_, i) => (
                    <div
                        key={`sparkle-${i}`}
                        className="sparkle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `sparkle ${2 + Math.random() * 4}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* Embossed Ripples/Dunes */}
            <div className="absolute inset-0 opacity-40 z-[1]">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
                    style={{
                        background: `
                             radial-gradient(circle at 10% 20%, rgba(255,255,255,0.05) 0%, transparent 40%),
                             radial-gradient(circle at 90% 80%, rgba(0,0,0,0.3) 0%, transparent 50%),
                             repeating-linear-gradient(45deg, transparent, transparent 150px, rgba(255,255,255,0.015) 170px, transparent 190px),
                             repeating-linear-gradient(-45deg, transparent, transparent 200px, rgba(0,0,0,0.15) 220px, transparent 240px)
                           `,
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            {/* Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-[4]" />
        </div>
    );
}
