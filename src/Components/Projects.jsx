import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Personal Portfolio",
    link: "https://portfolio-ten-jade-21.vercel.app/",
    description: [
      "Developed a responsive portfolio website using React.js, Tailwind CSS, and Framer Motion.",
      "Showcased projects and skills with clean UI and smooth animations.",
      "Focused on performance optimization for fast loading."
    ],
  },
  {
    name: "Snippit",
    link: "https://snippit-five.vercel.app/",
    description: [
      "Built a customizable online code editor using React.js and CSS.",
      "Implemented syntax highlighting, theme switching, and export functionality."
    ],
  },
  {
    name: "Resumify",
    link: "https://resumify-blush-six.vercel.app/",
    description: [
      "Developed a full-featured resume builder with real-time preview and template selection.",
      "Added one-click PDF export functionality.",
      "Designed a responsive and user-friendly UI."
    ],
  }
];

export default function Projects() {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="space-y-2 text-xs">
        {projects.map((project, idx) => (
          <div key={project.name} className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[15px] font-bold text-gray-900">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-words"
              >
                [Link]
              </a>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Optional: hyphen-based divider */}
            {idx !== projects.length - 1 && (
              <p className="text-gray-400 tracking-widest">--------------------------------------------------</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
