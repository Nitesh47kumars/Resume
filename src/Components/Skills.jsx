import SectionTitle from "./SectionTitle";

const skills = [
  {
    label: "Frontend",
    value:
      "HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS, Redux Toolkit, Context API, TypeScript (Basics), Next.js (Basics)",
  },
  {
    label: "Backend",
    value:
      "Node.js, Express.js, REST APIs, API Integration, JWT Authentication",
  },
  {
    label: "Database",
    value:
      "MongoDB, Mongoose, MySQL (Basic)",
  },
  {
    label: "Tools",
    value:
      "Git, GitHub, Postman, Jira, Microsoft Teams, MS Office Suite, MS Outlook",
  },
];

export default function Skills() {
  return (
    <section>
      <SectionTitle title="Technical Skills" />
      <div className="text-xs space-y-1">
        {skills.map(({ label, value }) => (
          <p key={label}>
            <span className="font-bold text-gray-900">{label}:</span>{" "}
            {value}
          </p>
        ))}
      </div>
    </section>
  );
}