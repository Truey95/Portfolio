// text found in hero component
export default function HeroText(): JSX.Element {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <p className="uppercase text-sm tracking-[0.4em] text-white font-bold">
          Creative Developer & 3D Enthusiast
        </p>
        <h1 className="text-white drop-shadow-sm font-black">
          RICKY <span className="text-white opacity-90">ROLLINS</span>
        </h1>
        <p className="py-2 text-white max-w-lg m-auto font-medium leading-relaxed text-lg">
          Crafting immersive digital experiences through 3D web development and creative coding.
        </p>
        <button className="mt-4">
          Get in touch
        </button>
      </div>
    </>
  );
}
