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
      <div className="space-y-1.5 text-xs">
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
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="12"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                  </svg>
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