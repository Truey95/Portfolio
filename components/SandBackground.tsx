import React from 'react';

export default function SandBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-sand-black pointer-events-none">
            {/* Base Kinetic Sand Texture (Fine Grain) */}
            <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")`
                }}
            />

            {/* Larger Embossed Sand Dunes/Ripples */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
                    style={{
                        background: `
                 radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 40%),
                 radial-gradient(circle at 80% 70%, rgba(0,0,0,0.2) 0%, transparent 50%),
                 repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.01) 120px, transparent 140px),
                 repeating-linear-gradient(-45deg, transparent, transparent 150px, rgba(0,0,0,0.1) 170px, transparent 190px)
               `,
                        filter: 'blur(40px)'
                    }}
                />
            </div>

            {/* Tactile "Pressed" Pattern Layer */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Vignette for depth */}
            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
                }}
            />

            {/* Animated subtle shimmer */}
            <div className="absolute inset-0 opacity-[0.03] animate-pulse"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")`,
                    animationDuration: '8s'
                }}
            />
        </div>
    );
}
