import React from 'react';
import { journeyData, earlyFoundations, educationData } from './journeyData';

export default function Journey(): JSX.Element {
    return (
        <section id="journey" className="w-full h-auto py-24 bg-transparent mt-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="uppercase text-sm tracking-[0.4em] text-white font-luxury mb-4">
                        Skill-Stacking Journey
                    </p>
                    <h2 className="text-4xl md:text-5xl font-luxury text-white uppercase tracking-widest mb-8">
                        The Evolution
                    </h2>
                    <p className="text-white font-premium max-w-2xl mx-auto leading-relaxed text-lg opacity-90">
                        A lifelong builder of skills and systems, I&apos;ve spent 15+ years layering expertise across technology,
                        hardware, software, design, and human-centered problem solving.
                    </p>
                </div>

                <div className="space-y-12 relative">
                    {/* Vertical path */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

                    {journeyData.map((job, index) => (
                        <div key={job.company} className="relative flex flex-col md:flex-row items-center justify-between">
                            {/* Timeline dot */}
                            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 z-10 hidden md:block"
                                style={{ top: '2rem' }} />

                            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                <div className="embossed-card p-8 group hover:scale-[1.02] transition-transform duration-500">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 font-luxury italic">
                                            {job.year}
                                        </span>
                                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-premium">
                                            Skill Layer
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-luxury text-white mb-1 uppercase tracking-wider">{job.company}</h3>
                                    <p className="text-sm font-premium text-white/80 mb-4 italic">{job.role}</p>

                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/90 font-bold mb-1">Layer Depth:</p>
                                        <p className="text-xs text-white/70 italic">{job.layer}</p>
                                    </div>

                                    <ul className="space-y-3">
                                        {job.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-white/80 font-premium leading-relaxed border-none lowercase p-0 hover:bg-transparent">
                                                <span className="text-white opacity-40 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education & Foundations */}
                <div className="grid md:grid-cols-2 gap-8 mt-24">
                    <div className="embossed-card p-8">
                        <p className="uppercase text-xs tracking-[0.3em] text-white/60 font-luxury mb-6 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-white/20"></span>
                            Education
                        </p>
                        <h3 className="text-2xl font-luxury text-white uppercase tracking-widest mb-2">{educationData.college}</h3>
                        <p className="text-lg font-premium text-white/80 italic mb-1">{educationData.degree}</p>
                        <p className="text-sm font-luxury text-white/40">{educationData.year}</p>
                    </div>

                    <div className="embossed-card p-8">
                        <p className="uppercase text-xs tracking-[0.3em] text-white/60 font-luxury mb-6 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-white/20"></span>
                            Early Foundations
                        </p>
                        <div className="space-y-6">
                            {earlyFoundations.map((found, i) => (
                                <div key={i} className="border-l border-white/10 pl-4">
                                    <h4 className="text-white font-luxury uppercase tracking-wider text-sm">{found.company} — {found.role}</h4>
                                    <p className="text-[10px] text-white/40 mb-2 uppercase tracking-widest font-luxury">Age {found.age}</p>
                                    <p className="text-xs text-white/70 font-premium leading-relaxed">{found.takeaway}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
