import Image from "next/image";

const photos = [
    {
        src: "/assets/about_developer.png",
        alt: "Developer Workspace",
        title: "The Workshop"
    },
    {
        src: "/assets/monk.png",
        alt: "Monk",
        title: "Focus"
    },
    {
        src: "/assets/contact_communication.png",
        alt: "Communication",
        title: "Connection"
    },
    {
        src: "/assets/projects/aivrart.png",
        alt: "Aivrar",
        title: "Creation"
    }
];

function PhotosCarousel(): JSX.Element {
    return (
        <div className="relative overflow-hidden py-10">
            <div className="flex gap-8 animate-photos-move hover:pause-animation">
                {[1, 2].map((loop) => (
                    <div key={loop} className="flex gap-12 min-w-full">
                        {photos.map((photo, index) => (
                            <div
                                key={`${loop}-${index}`}
                                className="relative h-[320px] w-[320px] shrink-0 overflow-hidden rounded-2xl debossed-container group hover:scale-[1.02] transition-all duration-700 ease-out"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                {/* Acid-washed sand texture overlay */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')]" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                                    <p className="font-luxury text-[11px] uppercase tracking-[0.3em] text-white">{photo.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes photosScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-photos-move {
                    display: flex;
                    width: fit-content;
                    gap: 3rem; /* matches gap-12 */
                    animation: photosScroll 40s linear infinite;
                }
                .hover\:pause-animation:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}

export default function Photos(): JSX.Element {
    return (
        <section id="photos" className="w-full py-12 bg-transparent flex items-center">
            <div className="max-w-[100vw] mx-auto px-6 overflow-hidden w-full">
                <p className="uppercase text-sm tracking-[0.3em] text-white text-center xl:text-start font-luxury mb-4">
                    Gallery
                </p>
                <h2 className="text-center xl:text-start uppercase tracking-wider mb-8 text-3xl font-luxury text-white border-b border-white/5 pb-4">
                    Captured Moments
                </h2>

                <PhotosCarousel />
            </div>
        </section>
    );
}
