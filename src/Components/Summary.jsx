import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <section>
      <SectionTitle title="Professional Summary" />
      <div className="text-xs leading-relaxed space-y-2">
        <p>
          Front-End Developer skilled in <strong>HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS, Redux, Framer Motion, Git, and GitHub</strong>. Currently pursuing BCA at Guru Nanak Khalsa College, Yamunanagar. Experienced in building responsive, accessible, and high-performance web applications.
        </p>

        <p>
          Developed projects including a personal portfolio, online code editor, and resume generator. Focused on creating user-centered interfaces, improving problem-solving skills, and collaborating effectively in team environments.
        </p>
      </div>
    </section>
  );
}
