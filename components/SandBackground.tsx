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

            {/* Stars */}
            <div className="absolute inset-0 z-[1] opacity-60">
                <style jsx>{`
                    @keyframes sparkle {
                        0%, 100% { opacity: 0.1; transform: scale(0.8); }
                        50% { opacity: 0.9; transform: scale(1.3); }
                    }
                    @keyframes rotateSlow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes shootingStar {
                        0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(0); opacity: 0; }
                        5% { opacity: 1; scale(1); }
                        15% { transform: translateX(-800px) translateY(800px) rotate(-45deg) scale(0.5); opacity: 0; }
                        100% { transform: translateX(-800px) translateY(800px) rotate(-45deg) scale(0); opacity: 0; }
                    }
                    .star {
                        position: absolute;
                        background: white;
                        border-radius: 50%;
                    }
                    .shooting-star {
                        position: absolute;
                        width: 180px;
                        height: 2px;
                        background: linear-gradient(90deg, white, transparent);
                        opacity: 0;
                    }
                `}</style>

                {/* 200 Stars */}
                {[...Array(200)].map((_, i) => (
                    <div
                        key={`star-${i}`}
                        className="star"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 2}px`,
                            height: `${Math.random() * 2}px`,
                            opacity: Math.random(),
                            animation: `sparkle ${2 + Math.random() * 4}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}

                {/* Shooting Stars */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`ssh-star-${i}`}
                        className="shooting-star"
                        style={{
                            top: `${Math.random() * 50}%`,
                            right: `${-10 + Math.random() * 40}%`,
                            animation: `shootingStar ${10 + Math.random() * 20}s infinite linear`,
                            animationDelay: `${Math.random() * 25}s`
                        }}
                    />
                ))}
            </div>

            {/* Spinning Planets with Depth */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {[
                    { color: '#1a1a1a', size: 320, top: '15%', left: '70%', dur: '120s', shadow: '#050505', glow: 'rgba(255,255,255,0.02)', blur: '0px', scale: 1 },
                    { color: '#121212', size: 120, top: '65%', left: '15%', dur: '80s', shadow: '#030303', glow: 'rgba(255,255,255,0.01)', blur: '2px', scale: 0.8 },
                    { color: '#0d0d0d', size: 180, top: '40%', left: '80%', dur: '150s', shadow: '#020202', glow: 'rgba(255,255,255,0.015)', blur: '4px', scale: 0.6 },
                    { color: '#080808', size: 60, top: '80%', left: '40%', dur: '200s', shadow: '#010101', glow: 'rgba(255,255,255,0.005)', blur: '8px', scale: 0.4 },
                ].map((planet, i) => (
                    <div
                        key={`planet-${i}`}
                        className="absolute rounded-full"
                        style={{
                            width: planet.size,
                            height: planet.size,
                            top: planet.top,
                            left: planet.left,
                            background: `radial-gradient(circle at 30% 30%, ${planet.glow} 0%, transparent 70%)`,
                            backgroundColor: planet.color,
                            boxShadow: `inset -20px -20px 60px ${planet.shadow}, 20px 20px 40px rgba(0,0,0,0.8), 0 0 20px ${planet.glow}`,
                            animation: `rotateSlow ${planet.dur} infinite linear`,
                            filter: `blur(${planet.blur})`,
                            transform: `scale(${planet.scale})`,
                        }}
                    >
                        {/* Sand texture on planet surface */}
                        <div className="absolute inset-0 rounded-full opacity-[0.15] mix-blend-overlay"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pGrain-${i}'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pGrain-${i})'/%3E%3C/svg%3E")`
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Embossed Ripples/Dunes */}
            <div className="absolute inset-0 opacity-30 z-[2]">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
                    style={{
                        background: `
                             radial-gradient(circle at 10% 20%, rgba(255,255,255,0.03) 0%, transparent 40%),
                             radial-gradient(circle at 90% 80%, rgba(0,0,0,0.2) 0%, transparent 50%),
                             repeating-linear-gradient(45deg, transparent, transparent 150px, rgba(255,255,255,0.01) 170px, transparent 190px)
                           `,
                        filter: 'blur(60px)'
                    }}
                />
            </div>

            {/* Depth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 z-[5]" />
        </div>
    );
}
