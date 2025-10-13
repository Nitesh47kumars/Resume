import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skills = [
    "HTML & CSS – Proficient",
    "Tailwind CSS – Intermediate",
    "JavaScript – Intermediate",
    "React – Beginner to Intermediate",
    "Framer Motion – Basic",
    "Git & GitHub – Comfortable",
  ];

  return (
    <section>
      <SectionTitle title="Skills" />
      <ul className="grid grid-cols-2 gap-2 text-sm">
        {skills.map((skill) => {
          const [name, level] = skill.split("–").map(s => s.trim());
          return (
            <li key={skill}>
              <strong>{name}</strong> – <span className="font-normal">{level}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
