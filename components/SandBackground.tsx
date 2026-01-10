import React from 'react';

export default function SandBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-sand-black pointer-events-none">
            {/* Acid Wash Base Layer (Bleached Patches) */}
            <div className="absolute inset-0 opacity-[0.08]"
                style={{
                    background: `
                        radial-gradient(circle at 15% 25%, #ffffff 0%, transparent 35%),
                        radial-gradient(circle at 75% 15%, #ffffff 0%, transparent 40%),
                        radial-gradient(circle at 85% 85%, #ffffff 0%, transparent 30%),
                        radial-gradient(circle at 25% 75%, #ffffff 0%, transparent 45%)
                    `,
                    filter: 'blur(100px)',
                    mixBlendMode: 'soft-light'
                }}
            />

            {/* Base Kinetic Sand Texture (Fine Grain) */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")`
                }}
            />

            {/* Acid Wash Distress (High Contrast Grain) */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-color-dodge"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='distressFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='2' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23distressFilter)'/%3%3C/svg%3")`,
                    filter: 'contrast(150%) brightness(120%)'
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

            {/* Animated subtle shimmer (Bleached edges) */}
            <div className="absolute inset-0 opacity-[0.04] animate-pulse"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='2' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")`,
                    animationDuration: '10s',
                    mixBlendMode: 'screen'
                }}
            />

            {/* Twinkling Black Glitter stars & Shooting Stars */}
            <div className="absolute inset-0 z-[5]">
                <style jsx>{`
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.1; transform: scale(0.8); }
                        50% { opacity: 0.8; transform: scale(1.2); }
                    }
                    @keyframes shootingStar {
                        0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(0); opacity: 0; }
                        5% { opacity: 1; scale(1); }
                        20% { transform: translateX(-500px) translateY(500px) rotate(-45deg) scale(1); opacity: 0; }
                        100% { transform: translateX(-500px) translateY(500px) rotate(-45deg) scale(0); opacity: 0; }
                    }
                    .glitter-particle {
                        position: absolute;
                        width: 2px;
                        height: 2px;
                        background: white;
                        border-radius: 50%;
                        filter: blur(0.5px);
                        box-shadow: 0 0 4px rgba(255,255,255,0.8);
                    }
                    .shooting-star {
                        position: absolute;
                        width: 100px;
                        height: 1px;
                        background: linear-gradient(90deg, white, transparent);
                        filter: blur(1px);
                        opacity: 0;
                    }
                `}</style>
                {[...Array(50)].map((_, i) => (
                    <div
                        key={`twink-${i}`}
                        className="glitter-particle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5,
                            animation: `twinkle ${2 + Math.random() * 4}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
                {[...Array(4)].map((_, i) => (
                    <div
                        key={`shoot-${i}`}
                        className="shooting-star"
                        style={{
                            top: `${Math.random() * 50}%`,
                            right: `${Math.random() * 20}%`,
                            animation: `shootingStar ${5 + Math.random() * 10}s infinite linear`,
                            animationDelay: `${Math.random() * 15}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
