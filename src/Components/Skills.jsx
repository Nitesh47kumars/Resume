import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section>
      <SectionTitle title="Technical Skills" />
      <div className="text-xs space-y-1">
        <p>
          <span className="font-bold text-gray-900">Frontend:</span> HTML5,
          CSS3, JavaScript (ES6+), React.js, Redux, Tailwind CSS, Framer Motion
        </p>
        <p>
          <span className="font-bold text-gray-900">Backend:</span> Node.js,
          Express.js, REST APIs, JWT, Bcrypt, Axios
        </p>
        <p>
          <span className="font-bold text-gray-900">Database & Tools:</span>{" "}
          MongoDB, Mongoose, Postman, Git & GitHub, Figma to Code
        </p>
      </div>
    </section>
  );
}
