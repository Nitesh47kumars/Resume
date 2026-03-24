import SectionTitle from "./SectionTitle";

const skills = [
  {
    label: "Frontend",
    value: "HTML5, CSS3, JavaScript (ES6+), React.js, Redux, Tailwind CSS",
  },
  {
    label: "Backend",
    value: "Node.js, Express.js, REST APIs, JWT, Bcrypt, Axios",
  },
  {
    label: "Database & Tools",
    value: "MongoDB, Mongoose, Postman, Git & GitHub, Figma to Code",
  },
  {
    label: "Soft Skills",
    value: "Communication, Teamwork, Willingness to Learn, Fast Learner",
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