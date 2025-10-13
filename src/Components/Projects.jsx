import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Personal Portfolio",
    link: "https://portfolio-ten-jade-21.vercel.app/",
    description:
      "Developed my first React portfolio using React.js, Tailwind CSS, Framer Motion for smooth animations, React Icons, and UI components from Uiverse.",
  },
  {
    name: "Info Nation",
    link: "https://info-nation-eight.vercel.app/posts",
    description:
      "A React.js project built to practice API integration and client-side routing using react-router-dom, focusing on displaying dynamic articles.",
  },
  {
    name: "Pokémon Website",
    link: "https://pokemon-five-inky.vercel.app/",
    description:
      "A responsive application designed to learn and work with complex APIs, built entirely with React and Tailwind CSS.",
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
              rel="noopener noreferrer"
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
