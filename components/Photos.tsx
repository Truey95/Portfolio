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
                    <div key={loop} className="flex gap-8 min-w-full">
                        {photos.map((photo, index) => (
                            <div
                                key={`${loop}-${index}`}
                                className="relative h-[280px] w-[280px] shrink-0 overflow-hidden rounded-xl debossed-container group hover:scale-[1.02] transition-all duration-500"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <p className="font-luxury text-[10px] uppercase tracking-widest text-white/70">{photo.title}</p>
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
                    animation: photosScroll 30s linear infinite;
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
                <p className="uppercase text-sm tracking-[0.3em] text-gray-500 text-center xl:text-start font-luxury mb-4">
                    Gallery
                </p>
                <h2 className="text-center xl:text-start uppercase tracking-wider mb-8 text-3xl font-luxury bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent border-b border-white/5 pb-4">
                    Captured Moments
                </h2>

                <PhotosCarousel />
            </div>
        </section>
    );
}
