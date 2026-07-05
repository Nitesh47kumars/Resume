import SectionTitle from "./SectionTitle";

const skills = [
  {
    label: "Frontend",
    value:
      "React.js, JavaScript (ES6+), Tailwind CSS, Context API, TypeScript (Basics), Next.js (Basics)",
  },
  {
    label: "Backend",
    value:
      "Node.js, Express.js, REST APIs, API Integration, JWT Authentication, Bcrypt",
  },
  {
    label: "Database",
    value:
      "MongoDB, Mongoose, MySQL (Basic)",
  },
  {
    label: "Tools",
    value:
      "Git, GitHub, Postman, Vercel, Netlify",
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