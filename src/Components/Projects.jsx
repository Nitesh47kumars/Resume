import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Personal Portfolio",
    link: "https://portfolio-ten-jade-21.vercel.app/",
    description: [
      "Built a responsive single-page application using React.js and Tailwind CSS.",
      "Created reusable UI components and smooth animations using Framer Motion.",
      "Optimized performance and ensured cross-device compatibility."
    ],
  },
  {
    name: "Snippit",
    link: "https://snippit-five.vercel.app/",
    description: [
      "Developed an online code editor using React.js and CSS.",
      "Implemented syntax highlighting, theme switching, and export functionality."
    ],
  },
  {
    name: "Resumify",
    link: "https://resumify-blush-six.vercel.app/",
    description: [
      "Built a resume builder with real-time preview and multiple templates.",
      "Implemented one-click PDF export with a responsive and user-friendly UI."
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
              <h3 className="text-[15px] font-bold text-gray-900">
                {project.name}
              </h3>
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

            {idx !== projects.length - 1 && (
              <p className="text-gray-400 tracking-widest">
                --------------------------------------------------
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
