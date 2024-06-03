function ProjectItem({ project }) {
  const { title, img, link, desc: description } = project;

  return (
    <figure className="bg-gradient-to-b from-[#141414] to-transparent px-4 py-6 space-y-elements rounded-lg">
      <a href={link} target="_blank">
        <img
          src={img}
          alt={title}
          className="h-72 w-full rounded-lg object-cover object-center"
          loading="lazy"
        />
      </a>
      <figcaption className="space-y-4">
        <a href={link}>
          <h3 className="text-xl text-center md:text-left font-semibold">
            {title}
          </h3>
        </a>
        <p className="text-base text-center md:text-left">{description}</p>
      </figcaption>
    </figure>
  );
}

export default ProjectItem;
