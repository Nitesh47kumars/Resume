import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Banking System",
    link: "https://banking-system-ten-zeta.vercel.app/",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT, Bcrypt, Mongoose, Tailwind CSS",
    description: [
      "Built a full-stack banking app with JWT authentication, Bcrypt password hashing, and role-based protected routes.",
      "Developed RESTful APIs for account creation, fund transfers, transaction history, and an admin dashboard.",
    ],
  },
  {
    name: "Resumify",
    link: "https://resumify-blush-six.vercel.app/",
    tech: "React.js, Tailwind CSS, jsPDF, HTML-to-Image, SessionStorage",
    description: [
      "Built a resume builder with real-time preview, multiple templates, and step-by-step structured input.",
      "Implemented one-click PDF export with working hyperlinks and SessionStorage for client-side persistence.",
    ],
  },
  {
    name: "Snippit",
    link: "https://snippit-five.vercel.app/",
    tech: "React.js, Tailwind CSS, React Syntax Highlighter, html2canvas",
    description: [
      "Developed a customizable code editor with syntax highlighting, theme switching, and multi-language support.",
      "Added PDF/JPG export via html2canvas and one-click copy with shareable link functionality.",
    ],
  },
  {
    name: "Personal Portfolio",
    link: "https://portfolio-ten-jade-21.vercel.app/",
    tech: "React.js, Tailwind CSS, Framer Motion, Lenis.js",
    description: [
      "Built a responsive SPA portfolio with smooth scrolling via Lenis.js and animations using Framer Motion.",
      "Showcases projects, skills, and contact details with full cross-device compatibility.",
    ],
  },
];

export default function Projects() {
  return (
    <section>
      <SectionTitle title="Projects" />
      <div className="space-y-3 text-xs">
        {projects.map((project) => (
          <div key={project.name} className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-[13px] font-bold text-gray-900">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                [Live Link]
              </a>
            </div>

            <p className="text-gray-700">
              <span className="font-semibold text-gray-900">Tech: </span>
              {project.tech}
            </p>

            <ul className="list-disc list-inside space-y-0.5">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}