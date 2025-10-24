import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skills = [
    "HTML & CSS – Advanced",
    "Tailwind CSS – Intermediate",
    "JavaScript – Intermediate",
    "React – Beginner to Intermediate",
    "Framer Motion – Basic",
    "Git & GitHub – Intermediate",
  ];

  return (
    <section>
      <SectionTitle title="Skills" />
      <ul className="grid grid-cols-2 gap-1 text-sm text-gray-700">
        {skills.map((skill) => {
          const [name, level] = skill.split("–").map(s => s.trim());
          return <li key={name}><strong>{name}</strong> – {level}</li>;
        })}
      </ul>
    </section>
  );
}
