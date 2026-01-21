import React, { useState } from 'react';

export default function ContactForm(): JSX.Element {
    const [status, setStatus] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const response = await fetch("https://formspree.io/f/mnperezv", { // Using my own Formspree for demo, user should replace
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setStatus("Success! Your message has been sent.");
            form.reset();
        } else {
            setStatus("Oops! There was a problem submitting your form.");
        }
    };

    return (
        <div className="w-full h-full embossed-card p-8 rounded-5xl">
            <h3 className="text-2xl font-luxury text-white uppercase tracking-widest mb-8 text-center md:text-start">
                Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className="uppercase text-xs tracking-[0.2em] text-white/50 mb-2 font-luxury ml-4">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="debossed-container bg-transparent p-4 rounded-4xl text-white focus:outline-none border-none placeholder-white/20 font-premium"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="uppercase text-xs tracking-[0.2em] text-white/50 mb-2 font-luxury ml-4">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="debossed-container bg-transparent p-4 rounded-4xl text-white focus:outline-none border-none placeholder-white/20 font-premium"
                            placeholder="email@example.com"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label className="uppercase text-xs tracking-[0.2em] text-white/50 mb-2 font-luxury ml-4">Message</label>
                    <textarea
                        name="message"
                        rows={6}
                        required
                        className="debossed-container bg-transparent p-4 rounded-4xl text-white focus:outline-none border-none placeholder-white/20 font-premium resize-none"
                        placeholder="How can I help you?"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 rounded-4xl bg-sand-gray text-white uppercase tracking-[0.3em] font-luxury text-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-embossed-sm hover:shadow-embossed"
                >
                    Send Signal
                </button>
                {status && (
                    <p className={`text-sm font-premium text-center mt-4 ${status.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                        {status}
                    </p>
                )}
            </form>
        </div>
    );
}
