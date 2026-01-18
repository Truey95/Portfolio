import React from 'react';

export default function SandBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-sand-black pointer-events-none">
            {/* Base Sand Grain Layer - Stays on top to texturize everything */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay z-[10]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Minimal Dunes/Blobs for Depth - REMOVED per user request */}

            {/* Embossed Ripples/Dunes */}
            <div className="absolute inset-0 opacity-20 z-[2]">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
                    style={{
                        background: `
                             radial-gradient(circle at 10% 20%, rgba(255,255,255,0.02) 0%, transparent 40%),
                             radial-gradient(circle at 90% 80%, rgba(0,0,0,0.1) 0%, transparent 50%),
                             repeating-linear-gradient(45deg, transparent, transparent 200px, rgba(255,255,255,0.005) 220px, transparent 240px)
                           `,
                        filter: 'blur(80px)'
                    }}
                />
            </div>

            {/* Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-[5]" />
        </div>
    );
}
