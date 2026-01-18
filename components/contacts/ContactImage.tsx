import Image from "next/image";

// image container for contact
export default function ContactImage(): JSX.Element {
  return (
    <div className="w-full h-auto m-auto embossed-card hidden md:flex items-center justify-center p-4 hover:scale-105 transition-all duration-300 rounded-5xl">
      <div className="relative w-full h-full debossed-container border-none rounded-4xl p-2">
        <Image
          alt="Connectivity"
          blurDataURL="/assets/navbarLogo.png"
          className="rounded-4xl md:flex hidden grayscale h-full object-cover"
          height={1080}
          placeholder="blur"
          src="/assets/contact_communication.png"
          width={1920}
        />
      </div>
    </div>
  );
}
