import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "React Flow",
    "Reusable Components",
    "Redux (Basic State Management)",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Web Design",
    "REST API Integration",
    "Git & GitHub",
    "Figma to Code",
  ];

  return (
    <section>
      <SectionTitle title="Technical Skills" />
      <ul className="flex flex-wrap text-xs gap-2 font-bold">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-white border-b px-2 py-1 border-gray-400 text-center"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
