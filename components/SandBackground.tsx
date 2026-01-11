import React from 'react';

export default function SandBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-sand-black pointer-events-none">
            {/* Acid Wash Base Layer (Bleached Patches) */}
            <div className="absolute inset-0 opacity-[0.05]"
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

            {/* Reference Grain Layer (Matching Aivrar) */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay z-[2]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Acid Wash Distress (High Contrast Grain) */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-color-dodge z-[3]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='distressFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.2' numOctaves='2' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23distressFilter)'/%3%3C/svg%3")`,
                    filter: 'contrast(150%) brightness(120%)'
                }}
            />

            {/* Larger Embossed Sand Dunes/Ripples */}
            <div className="absolute inset-0 opacity-30 z-[1]">
                <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%]"
                    style={{
                        background: `
                 radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 40%),
                 radial-gradient(circle at 80% 70%, rgba(0,0,0,0.2) 0%, transparent 50%),
                 repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.01) 120px, transparent 140px),
                 repeating-linear-gradient(-45deg, transparent, transparent 150px, rgba(0,0,0,0.1) 170px, transparent 190px)
               `,
                        filter: 'blur(50px)'
                    }}
                />
            </div>

            {/* Twinkling Glitter Stars (Increased count to 150) */}
            <div className="absolute inset-0 z-[5]">
                <style jsx>{`
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.1; transform: scale(0.8); }
                        50% { opacity: 0.9; transform: scale(1.3); }
                    }
                    @keyframes shootingStar {
                        0% { transform: translateX(0) translateY(0) rotate(-45deg) scale(0); opacity: 0; }
                        5% { opacity: 1; scale(1); }
                        20% { transform: translateX(-600px) translateY(600px) rotate(-45deg) scale(1); opacity: 0; }
                        100% { transform: translateX(-600px) translateY(600px) rotate(-45deg) scale(0); opacity: 0; }
                    }
                    .glitter-particle {
                        position: absolute;
                        width: 1px;
                        height: 1px;
                        background: white;
                        border-radius: 50%;
                        filter: blur(0.2px);
                        box-shadow: 0 0 3px rgba(255,255,255,0.9);
                    }
                    .shooting-star {
                        position: absolute;
                        width: 150px;
                        height: 1px;
                        background: linear-gradient(90deg, white, transparent);
                        filter: blur(1px);
                        opacity: 0;
                        z-index: 6;
                    }
                `}</style>
                {[...Array(150)].map((_, i) => (
                    <div
                        key={`twink-${i}`}
                        className="glitter-particle"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.7,
                            animation: `twinkle ${1.5 + Math.random() * 3}s infinite ease-in-out`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`shoot-${i}`}
                        className="shooting-star"
                        style={{
                            top: `${Math.random() * 40}%`,
                            right: `${-10 + Math.random() * 30}%`,
                            animation: `shootingStar ${8 + Math.random() * 12}s infinite linear`,
                            animationDelay: `${Math.random() * 20}s`
                        }}
                    />
                ))}
            </div>

            {/* Sand-Textured Planets */}
            <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
                {[
                    { color: '#ff6b6b', size: 150, top: '15%', left: '10%', blur: '2px', scale: 1, opacity: 0.15 },
                    { color: '#4facfe', size: 300, top: '60%', left: '80%', blur: '5px', scale: 0.8, opacity: 0.1 },
                    { color: '#f093fb', size: 80, top: '40%', left: '60%', blur: '1px', scale: 1.2, opacity: 0.2 },
                    { color: '#f6d365', size: 200, top: '10%', left: '85%', blur: '8px', scale: 0.5, opacity: 0.08 },
                    { color: '#84fab0', size: 120, top: '80%', left: '15%', blur: '3px', scale: 0.9, opacity: 0.12 },
                ].map((planet, i) => (
                    <div
                        key={`planet-${i}`}
                        className="absolute rounded-full"
                        style={{
                            width: planet.size,
                            height: planet.size,
                            top: planet.top,
                            left: planet.left,
                            background: `radial-gradient(circle at 30% 30%, ${planet.color} 0%, transparent 80%)`,
                            boxShadow: `inset -20px -20px 50px rgba(0,0,0,0.5), 10px 10px 30px rgba(0,0,0,0.3)`,
                            filter: `blur(${planet.blur})`,
                            transform: `scale(${planet.scale})`,
                            opacity: planet.opacity,
                        }}
                    >
                        {/* Sand Texture on the planet itself */}
                        <div className="absolute inset-0 rounded-full opacity-40 mix-blend-overlay"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='planetGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23planetGrain)'/%3E%3C/svg%3E")`
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
