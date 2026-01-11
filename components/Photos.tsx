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

export default function Photos(): JSX.Element {
    return (
        <section id="photos" className="w-full py-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <p className="uppercase text-sm tracking-[0.3em] text-gray-500 text-center xl:text-start font-luxury mb-4">
                    Gallery
                </p>
                <h2 className="text-center xl:text-start uppercase tracking-wider mb-12 text-3xl font-luxury bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    Captured Moments
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative aspect-square overflow-hidden rounded-xl embossed-card group hover:scale-[1.02] transition-all duration-500"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                <p className="font-luxury text-xs uppercase tracking-widest text-white/70">{photo.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
