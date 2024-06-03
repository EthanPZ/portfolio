import skillsData from "../data/skillsData";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <section className="flex items-center flex-col lg:mt-sections mt-sectionsMobile space-y-elements relative p-pagePadding">
      <div className="text-center space-y-elements">
        <h2 className="capitalize md:text-3xl text-2xl font-semibold">
          my skills
        </h2>
        <p className="md:text-lg text-base max-w-[25em]">
          A showcase for my diverse skill set, highlighting dedication, passion,
          and a commitment to excellence.
        </p>
      </div>

      <div className="pt-8">
        <ul className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8">
          {skillsData.map((skill, i) => (
            <SkillItem skill={skill} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
