import React from 'react';
import { HiOutlineChatBubbleLeftRight, HiOutlineShieldCheck, HiOutlineCpuChip, HiOutlineCodeBracket, HiOutlinePresentationChartBar, HiOutlineWrenchScrewdriver } from "react-icons/hi2";

export default function LegalPresenceContent(): JSX.Element {
    return (
        <div className="space-y-12 pb-24">
            {/* Intro section */}
            <section className="col-span-4">
                <h3 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest border-b border-white/5 pb-2">Project Overview</h3>
                <p className="text-white font-premium leading-relaxed text-lg mb-6">
                    LegalPresence is an open-source AI platform that allows lawyers to maintain continuous client communication
                    without sacrificing ethics or personal workload. It automates acknowledgement, triage, and routine
                    follow-ups while escalating critical issues to the lawyer.
                </p>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 italic text-white/80 font-premium">
                    &quot;Never leave a client waiting — ethically, transparently, and efficiently.&quot;
                </div>
            </section>

            {/* Core Features */}
            <section className="col-span-4">
                <h3 className="text-2xl font-luxury text-white mb-8 uppercase tracking-widest border-b border-white/5 pb-2">Core Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "AI Communication Layer",
                            icon: <HiOutlineChatBubbleLeftRight />,
                            desc: "Email, SMS, and Voice Integration. Automatically responds with transparent AI, summarizes requests, and handles repetitive queries (case status, deadlines)."
                        },
                        {
                            title: "Escalation & Triage",
                            icon: <HiOutlineShieldCheck />,
                            desc: "Classifies messages as Urgent, Important, or Informational. Urgent items trigger immediate notifications, while routine items are handled autonomously."
                        },
                        {
                            title: "Context-Aware AI",
                            icon: <HiOutlineCpuChip />,
                            desc: "Uses intake forms and prior emails to understand context. Strictly procedural guidance only—never unauthorized legal advice."
                        },
                        {
                            title: "Ethical AI Voice",
                            icon: <HiOutlinePresentationChartBar />,
                            desc: "AI introduces itself as an assistant. Includes disclaimers for compliance and logs all conversations for auditability."
                        },
                        {
                            title: "Open Integration",
                            icon: <HiOutlineWrenchScrewdriver />,
                            desc: "REST API for case management software (Clio, MyCase). Works with Twilio, SendGrid, and VoIP systems."
                        },
                        {
                            title: "Analytics Dashboard",
                            icon: <HiOutlinePresentationChartBar />,
                            desc: "Tracks average response times, messages handled by AI vs human, and client satisfaction metrics."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="embossed-card p-6 flex gap-4">
                            <div className="text-2xl text-white/40 mt-1">{feature.icon}</div>
                            <div>
                                <h4 className="text-white font-luxury uppercase tracking-widest text-sm mb-2 font-bold">{feature.title}</h4>
                                <p className="text-white/70 text-sm font-premium leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technical Stack */}
            <section className="col-span-4">
                <h3 className="text-2xl font-luxury text-white mb-6 uppercase tracking-widest border-b border-white/5 pb-2">Integrated Technology</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Backend", tech: "Node.js / Python" },
                        { label: "AI Models", tech: "OpenAI / HuggingFace" },
                        { label: "Database", tech: "PostgreSQL" },
                        { label: "Frontend", tech: "React + Tailwind" },
                        { label: "Comm Layer", tech: "Twilio / SendGrid" },
                        { label: "Infra", tech: "Docker" }
                    ].map((item, i) => (
                        <div key={i} className="debossed-container p-4 text-center">
                            <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 font-luxury">{item.label}</p>
                            <p className="text-xs text-white uppercase tracking-widest font-bold">{item.tech}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="col-span-4 rounded-3xl bg-white/5 p-8 border border-white/10">
                <h3 className="text-xl font-luxury text-white mb-6 uppercase tracking-widest text-center">Use Case Scenarios</h3>
                <div className="space-y-6 max-w-2xl mx-auto">
                    <div className="border-l-2 border-white/20 pl-6">
                        <h4 className="text-white font-luxury text-sm uppercase tracking-wider mb-2">The Solo Practitioner</h4>
                        <p className="text-white/70 text-sm font-premium italic">Managing 50+ daily emails alone. AI handles routine inquiry, lawyer only handles the critical issues.</p>
                    </div>
                    <div className="border-l-2 border-white/20 pl-6">
                        <h4 className="text-white font-luxury text-sm uppercase tracking-wider mb-2">Courtroom Continuity</h4>
                        <p className="text-white/70 text-sm font-premium italic">Partners in trial or traveling can maintain a 24/7 client presence without feeling absent.</p>
                    </div>
                </div>
            </section>

            {/* Open Source Call to Action */}
            <section className="col-span-4 text-center py-12">
                <h3 className="text-3xl font-luxury text-white mb-4 uppercase tracking-[0.2em]">Open Source Ethics</h3>
                <p className="text-white/60 font-premium max-w-xl mx-auto mb-10 leading-relaxed italic">
                    Empowering firms to adopt AI without expensive SaaS lock-in.
                    Community-driven jurisdictions and compliance templates.
                </p>
                <button className="px-12 py-4">
                    View on GitHub
                </button>
            </section>
        </div>
    );
}
