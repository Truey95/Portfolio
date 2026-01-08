import SkillsContainer from "./SkillsContainer";

// skills component
function Skills(): JSX.Element {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-sm tracking-[0.3em] text-gray-500 text-center xl:text-start pt-24 lg:pt-96 xl:pt-24 font-luxury">
          Skills
        </p>
        <h2 className="py-4 text-center xl:text-start uppercase tracking-wider">Expertise</h2>

        <SkillsContainer />
      </div>
    </div>
  );
}

export default Skills;
