import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Personal Portfolio",
    link: "https://portfolio-ten-jade-21.vercel.app/",
    description:
      "Developed a responsive portfolio website using React.js, Tailwind CSS, and Framer Motion to showcase projects and skills. Focused on clean UI, animation, and performance optimization.",
  },
  {
    name: "Snippit",
    link: "https://snippit-five.vercel.app/",
    description:
      "Built a customizable online code editor using React.js and CSS with syntax highlighting, theme switching, and export functionality.",
  },
  {
    name: "Resumify",
    link: "https://resumify-blush-six.vercel.app/",
    description:
      "Built a full-featured resume builder with real-time preview, template selection, and one-click PDF export. Designed a responsive and clean UI for an easy resume-creation experience.",
  }
  
];

export default function Projects() {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="space-y-2 text-xs">
        {projects.map((project) => (
          <div key={project.name} className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-gray-900">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                [Link]
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
