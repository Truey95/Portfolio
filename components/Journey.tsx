import React, { useState } from 'react';
import { journeyData, earlyFoundations, educationData } from './journeyData';

export default function Journey(): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeJob = journeyData[activeIndex];

    return (
        <section id="journey" className="w-full min-h-screen flex items-center justify-center bg-transparent py-20">
            <div className="w-full max-w-5xl mx-auto px-6 flex flex-col">
                {/* Compact Header */}
                <div className="text-center mb-6">
                    <p className="uppercase text-[9px] tracking-[0.4em] text-white/60 font-luxury mb-1">
                        Evolutionary Progress
                    </p>
                    <h2 className="text-2xl md:text-3xl font-luxury text-white uppercase tracking-[0.2em]">
                        The Evolution
                    </h2>
                </div>

                {/* Streamlined Horizontal Timeline */}
                <div className="relative mb-12 px-2 mt-6">
                    {/* Background Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />

                    <div className="relative flex justify-between items-center w-full z-10">
                        {journeyData.map((job, index) => (
                            <button
                                key={job.company}
                                onClick={() => setActiveIndex(index)}
                                className="group relative flex flex-col items-center focus:outline-none p-4 -m-4 cursor-pointer"
                                aria-label={`View ${job.company} details`}
                            >
                                {/* Year Label */}
                                <span className={`absolute -top-10 text-[10px] tracking-[0.1em] font-luxury transition-all duration-300 ${index === activeIndex ? 'text-white opacity-100 scale-110 font-bold' : 'text-white/30 group-hover:text-white/60'
                                    }`}>
                                    {job.year}
                                </span>

                                {/* Minimal Dot with larger visible hit area on hover */}
                                <div className={`relative w-4 h-4 flex items-center justify-center`}>
                                    <div className={`w-3 h-3 rounded-full border transition-all duration-500 z-10 ${index === activeIndex
                                        ? 'bg-white border-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.6)]'
                                        : 'bg-sand-black border-white/20 group-hover:border-white/60 group-hover:scale-110'
                                        }`} />
                                    {/* Invisible larger hit area wrapper */}
                                    <div className="absolute inset-x-[-20px] inset-y-[-20px]" />
                                </div>

                                {/* Company Hint */}
                                <span className={`absolute -bottom-8 text-[8px] uppercase tracking-[0.1em] font-premium transition-all duration-300 hidden md:block whitespace-nowrap ${index === activeIndex ? 'text-white/80 opacity-100' : 'opacity-0'
                                    }`}>
                                    {job.company}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Adaptive Content Area */}
                <div className="flex-1 flex flex-col md:grid md:grid-cols-12 gap-6 min-h-0">

                    {/* Left: Summary & Metadata */}
                    <div className="md:col-span-4 flex flex-col gap-4 overflow-hidden">
                        <div className="embossed-card p-5 rounded-4xl flex-shrink-0">
                            <h3 className="text-xl font-luxury text-white mb-1 uppercase tracking-wider leading-tight">
                                {activeJob.company}
                            </h3>
                            <p className="text-xs font-premium text-white/60 mb-4 italic">
                                {activeJob.role}
                            </p>

                            <div className="debossed-container p-3 rounded-2xl bg-black/20 border-none">
                                <p className="text-[8px] uppercase tracking-[0.1em] text-white/50 font-bold mb-1">Layer:</p>
                                <p className="text-[10px] text-white/70 font-premium italic leading-tight">
                                    {activeJob.layer}
                                </p>
                            </div>
                        </div>

                        {/* Education/Foundations - Making them look more interactive */}
                        <div className="flex flex-col gap-3 mt-auto mb-2 opacity-70 hover:opacity-100 transition-opacity">
                            <div className="debossed-container p-3 rounded-2xl border-none cursor-pointer hover:bg-white/5 transition-colors">
                                <p className="text-[8px] uppercase tracking-widest text-white/30 mb-1 font-luxury">Education</p>
                                <p className="text-[9px] text-white/70 font-premium truncate uppercase tracking-tighter">
                                    {educationData.college} • {educationData.degree} <span className="text-white/40 ml-1">[{educationData.year}]</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detailed List */}
                    <div className="md:col-span-8 flex flex-col">
                        <div className="debossed-container p-6 rounded-4xl border-none flex-1 flex flex-col">
                            <h4 className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-4 font-luxury flex items-center gap-3 flex-shrink-0">
                                <span className="w-6 h-[1px] bg-white/10"></span>
                                Impact
                            </h4>

                            <div className="pr-2">
                                <ul className="space-y-4">
                                    {activeJob.description.map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex gap-3 text-sm text-white/80 font-premium leading-relaxed border-none p-0 hover:bg-transparent rounded-none transition-all duration-300 group/item"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-white/20 mt-2 shrink-0 group-hover/item:bg-white/50 transition-colors" />
                                            <span className="lowercase first-letter:uppercase">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Early Traits - Making ages clickable */}
                            <div className="mt-4 pt-4 border-t border-white/5 flex-shrink-0">
                                <p className="text-[8px] uppercase tracking-widest text-white/30 mb-2 font-luxury">Early Foundations</p>
                                <div className="flex flex-wrap gap-3">
                                    {earlyFoundations.map((found, i) => (
                                        <button
                                            key={found.company}
                                            className="group/foundation relative flex items-center gap-2 px-3 py-1.5 rounded-full debossed-container border-none hover:bg-white/5 transition-all duration-300"
                                            title={found.takeaway}
                                        >
                                            <span className="text-[10px] text-white font-bold font-luxury">Age {found.age}</span>
                                            <span className="text-[8px] text-white/30 font-premium uppercase tracking-tighter group-hover/foundation:text-white/60 transition-colors">
                                                {found.company}
                                            </span>

                                            {/* Hover Takeaway Tooltip */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 opacity-0 group-hover/foundation:opacity-100 transition-opacity pointer-events-none w-48 z-50">
                                                <p className="text-[9px] text-white/90 font-premium leading-tight text-center italic">{found.takeaway}</p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
