import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skills = [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Framer-Motion",
    "Git & GitHub",
    "Responsive Web Apps",
    "REST-API Integration",
    "Redux-Toolkit",
  ];

  return (
    <section>
      <SectionTitle title="Technical Skills" />
      <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700 sm:grid-cols-2">
        {skills.map((skill) => {
          const [name, level] = skill.split(":").map((s) => s.trim());
          return (
            <li key={name}>
              <strong>{name}</strong> {level}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
