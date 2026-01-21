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

import { useState, useRef } from "react";

function PhotosCarousel(): JSX.Element {
    const [scrollX, setScrollX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [hasMoved, setHasMoved] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState<null | typeof photos[0]>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true);
        setHasMoved(false);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setStartX(clientX - scrollX);
    };

    const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const x = clientX - startX;

        if (carouselRef.current) {
            const containerWidth = carouselRef.current.parentElement?.offsetWidth || 0;
            const totalWidth = carouselRef.current.scrollWidth;
            const minScroll = containerWidth - totalWidth;

            if (x > 0) {
                setScrollX(x * 0.2);
            } else if (x < minScroll) {
                setScrollX(minScroll + (x - minScroll) * 0.2);
            } else {
                setScrollX(x);
            }
        }

        if (Math.abs(clientX - (startX + scrollX)) > 5) {
            setHasMoved(true);
        }
    };

    const onDragEnd = () => {
        setIsDragging(false);
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.parentElement?.offsetWidth || 0;
            const totalWidth = carouselRef.current.scrollWidth;
            const minScroll = Math.min(0, containerWidth - totalWidth - 100);

            if (scrollX > 0) {
                setScrollX(0);
            } else if (scrollX < minScroll) {
                setScrollX(minScroll);
            }
        }
    };

    const handlePhotoClick = (photo: typeof photos[0]) => {
        if (!hasMoved) {
            setSelectedPhoto(photo);
        }
    };

    return (
        <div className="relative overflow-hidden py-10 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={onDragStart}
            onTouchMove={onDragMove}
            onTouchEnd={onDragEnd}
        >
            <div
                ref={carouselRef}
                className="flex gap-12 transition-transform duration-300 ease-out will-change-transform"
                style={{ transform: `translateX(${scrollX}px)`, transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
            >
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        onClick={() => handlePhotoClick(photo)}
                        className="relative h-[320px] w-[320px] shrink-0 overflow-hidden embossed-card p-3 group hover:scale-[1.02] transition-all duration-700 ease-out"
                    >
                        <div className="relative w-full h-full overflow-hidden rounded-4xl debossed-container border-none">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover opacity-100 transition-opacity duration-700 pointer-events-none"
                            />
                        </div>
                        {/* Acid-washed sand texture overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')]" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                            <p className="font-luxury text-[11px] uppercase tracking-[0.3em] text-white underline cursor-pointer">Expand</p>
                            <p className="font-luxury text-[14px] uppercase tracking-[0.3em] text-white mt-1">{photo.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div className="relative w-full max-w-6xl h-full max-h-[80vh] flex flex-col items-center">
                        <div className="relative w-full h-full mb-6">
                            <Image
                                src={selectedPhoto.src}
                                alt={selectedPhoto.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-white font-luxury text-2xl uppercase tracking-[0.2em]">{selectedPhoto.title}</h3>
                        <button className="mt-8 text-white/50 hover:text-white uppercase tracking-widest text-xs border border-white/20 px-8 py-2 rounded-full">Close View</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Photos(): JSX.Element {
    return (
        <section id="photos" className="w-full min-h-screen py-12 bg-transparent flex items-center">
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
