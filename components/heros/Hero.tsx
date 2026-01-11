import { HeroCoontainer } from "./HeroCoontainer";

// hero component
function Hero(): JSX.Element {
  return (
    <div className="w-full h-[85vh] min-h-[600px] text-center" id="hero">
      <div className="max-w-7xl w-full h-full mx-auto px-6 flex flex-col justify-center items-center pt-20">
        <HeroCoontainer />
      </div>
    </div>
  );
}

export default Hero;


