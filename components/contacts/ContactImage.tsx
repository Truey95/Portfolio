import Image from "next/image";

// image container for contact
export default function ContactImage(): JSX.Element {
  return (
    <div className="w-full h-auto m-auto embossed-card hidden md:flex items-center justify-center p-4 hover:scale-105 transition-all duration-300">
      <Image
        alt="/"
        blurDataURL="../public/Linkssets/navbarLogo.png"
        className="rounded-xl md:flex hidden"
        height={1080}
        placeholder="blur"
        src="https://source.unsplash.com/random/?programmer"
        width={1920}
      />
    </div>
  );
}
