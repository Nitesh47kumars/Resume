import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
    "Animation",
    "Figma",
    "E-Commerce",
    "Responsive Web Design",
    "REST API Integration",
    "Styled-Components",
    "Git & GitHub",
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
