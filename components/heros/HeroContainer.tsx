import HeroLinks from "./HeroLinks";
import HeroText from "./HeroText";

// container for hero element
export function HeroContainer(): JSX.Element {
  return (
    <div className="">
      <HeroText />
      <HeroLinks />
    </div>
  );
}
