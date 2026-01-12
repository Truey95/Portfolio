// text found in hero component
export default function HeroText(): JSX.Element {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <p className="uppercase text-sm tracking-[0.4em] text-white font-bold">
          Website and mobile app Developer
        </p>
        <h1 className="text-white drop-shadow-sm font-black">
          RICKY <span className="text-white opacity-90">ROLLINS</span>
        </h1>
        <button className="mt-4">
          Get in touch
        </button>
      </div>
    </>
  );
}
