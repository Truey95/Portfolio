import { HeroContainer } from "./HeroContainer";

// hero component
function Hero(): JSX.Element {
  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center" id="hero">
      <div className="max-w-7xl w-full mx-auto px-6">
        <HeroContainer />
      </div>
    </div>
  );
}

export default Hero;


