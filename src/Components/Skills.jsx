import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skills = [
    "HTML5 & CSS3: Advanced",
    "JavaScript (ES6+): Intermediate",
    "React.js: Intermediate",
    "Tailwind CSS: Intermediate",
    "Framer Motion: Basic",
    "Git & GitHub: Intermediate",
    "Responsive Web Design: Advanced",
    "REST API Integration: Intermediate",
    "SEO Optimization: Basic",
    "VS Code & NPM: Intermediate",
  ];

  return (
    <section>
      <SectionTitle title="Technical Skills" />
      <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700 sm:grid-cols-2">
        {skills.map((skill) => {
          const [name, level] = skill.split(":").map((s) => s.trim());
          return (
            <li key={name}>
              <strong>{name}</strong>: {level}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
