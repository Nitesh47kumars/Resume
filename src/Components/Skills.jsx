import SectionTitle from "./SectionTitle";

const skills = [
  {
    label: "Frontend",
    value:
      "React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Redux, Context API, Next.js (Basics), TypeScript (Basics)",
  },
  {
    label: "Backend",
    value: "Node.js, Express.js, REST APIs, JWT Authentication, Bcrypt",
  },
  {
    label: "Database",
    value: "MongoDB, Mongoose, Basic MySQL",
  },
  {
    label: "Tools & Platforms",
    value: "Git, GitHub, Postman, Vercel, Netlify",
  },
  {
    label: "Other",
    value: "API Integration, Responsive UI Development, Debugging & Testing",
  },
  {
    label: "Soft Skills",
    value: "Problem-Solving, Team Collaboration, Quick Learner, Adaptability",
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