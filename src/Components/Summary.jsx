import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <section>
      <SectionTitle title="Professional Summary" />
      <div className="text-xs leading-relaxed space-y-2">
        <p>
          I'm <span className="font-semibold">Nitesh Shah</span>, a{" "}
          <strong>Front-End Developer</strong> pursuing{" "}
          <strong>BCA at Guru Nanak Khalsa College, Yamunanagar</strong>. Skilled in{" "}
          <strong>HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS, Redux,</strong>{" "}
          and <strong>Framer Motion</strong>, with experience using{" "}
          <strong>Git & GitHub</strong>.
        </p>

        <p>
          I’ve built projects including a React portfolio, online code editor, and
          API-powered apps—focused on creating{" "}
          <strong>accessible, high-performance, user-centered interfaces</strong>{" "}
          and continually improving problem-solving & teamwork.
        </p>
      </div>
    </section>
  );
}
