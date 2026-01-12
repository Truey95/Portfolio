import SkillsContainer from "./SkillsContainer";

// skills component
function Skills(): JSX.Element {
  return (
    <div id="skills" className="w-full h-auto p-2 py-12">
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-sm tracking-[0.3em] text-white text-center xl:text-start pt-4 font-luxury">
          Skills
        </p>
        <h2 className="py-2 text-center xl:text-start uppercase tracking-wider">Expertise</h2>

        <SkillsContainer />
      </div>
    </div>
  );
}

export default Skills;
