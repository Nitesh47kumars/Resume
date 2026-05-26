import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Banking System",
    link: "https://banking-system-ten-zeta.vercel.app/",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT, Bcrypt, Mongoose, Tailwind CSS",
    description: [
      "Developed a full-stack banking application using MERN stack with REST APIs for account management and transactions.",
      "Implemented JWT authentication, Bcrypt hashing, and secure protected routes with API testing via Postman.",
    ],
  },
  {
    name: "UpSkillerAI",
    link: "https://up-skiller-ai-ten.vercel.app/",
    tech: "MongoDB, Express.js, React.js, Node.js, SCSS, Gemini AI API, JWT, Cookies, Multer, Context API",
    description: [
      "Built an AI-powered MERN platform using Gemini AI for resume analysis, job matching, interview questions, and skill roadmaps.",
      "Implemented JWT auth, cookies, token blacklisting, Multer uploads, Context API, and AI resume downloads.",
    ],
  },
  {
    name: "Resumify",
    link: "https://resumify-blush-six.vercel.app/",
    tech: "React.js, Tailwind CSS, jsPDF, HTML-to-Image, SessionStorage",
    description: [
      "Built a dynamic resume builder with real-time preview and multiple customizable templates.",
      "Implemented PDF export with working hyperlinks and client-side data persistence using SessionStorage.",
    ],
  },
  {
    name: "Personal Portfolio",
    link: "https://portfolio-ten-jade-21.vercel.app/",
    tech: "React.js, Tailwind CSS, Framer Motion, Lenis.js",
    description: [
      "Designed and deployed a responsive portfolio showcasing projects and skills with modern UI/UX.",
      "Implemented smooth animations and scrolling using Framer Motion and Lenis.js.",
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
              <h3 className="text-[13px] font-bold text-black">
                {project.name}
              </h3>
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
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 3 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                </svg>
              </a>
            </div>

            <p className="text-black">
              <span className="font-semibold text-black">Tech: </span>
              {project.tech}
            </p>

            <ul className="list-disc text-black list-inside space-y-0.5">
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