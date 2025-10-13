import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Personal Portfolio",
    link: "https://portfolio-ten-jade-21.vercel.app/",
    description:
      "Designed and built a personal portfolio with React, Tailwind, and Framer Motion to showcase skills and projects.",
  },
  {
    name: "Info Nation",
    link: "https://info-nation-eight.vercel.app/posts",
    description:
      "A practice project displaying articles with dynamic routing using Next.js and Tailwind CSS.",
  },
  {
    name: "Pokémon Website",
    link: "https://pokemon-five-inky.vercel.app/",
    description:
      "Interactive Pokémon site using API data with React and Tailwind CSS.",
  },
];

export default function Projects() {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="space-y-4 text-sm">
        {projects.map((project) => (
          <div key={project.name}>
            <h3 className="font-semibold">{project.name}</h3>
            <a
              href={project.link}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {project.link}
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
