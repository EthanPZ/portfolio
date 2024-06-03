import projects from "../data/projects";
import ProjectItem from "./ProjectItem";

function MyWork() {
  return (
    <section className="flex items-center flex-col w-full p-pagePadding mt-sectionsMobile lg:mt-sections max-w-screen-2xl m-auto">
      <div className="space-y-elements text-center">
        <h2 className="capitalize text-2xl md:text-3xl font-semibold">
          My Work
        </h2>
        <p className="md:text-lg text-base max-w-[25em]">
          Explore a compilation of my projects, each a testament to my
          dedication, creativity, and technical prowess.
        </p>
      </div>

      <div className="mt-14 w-full grid lg:grid-cols-2 grid-cols-1 justify-evenly gap-8">
        {projects.map((project, i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </div>
    </section>
  );
}

export default MyWork;
