import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <section>
      <SectionTitle title="Professional Summary" />
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
        <p>
          I'm <span className="font-semibold">Nitesh Shah</span>, a passionate{" "}
          <strong>Front-End Developer</strong> currently pursuing a{" "}
          <strong>Bachelor of Computer Applications (BCA)</strong> at Guru Nanak
          Khalsa College, Yamunanagar. I specialize in building{" "}
          <strong>responsive, user-friendly web applications</strong> using{" "}
          <strong>
            HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS, and Framer
            Motion
          </strong>. I also use <strong>Git & GitHub</strong> for version
          control and collaboration.
        </p>

        <p>
          Currently in my <strong>2nd year (3rd semester)</strong>, I’ve built
          multiple projects including a React-based portfolio, an online code
          editor, and an API-powered web app. My focus is on creating{" "}
          <strong>clean, accessible, and high-performance user interfaces</strong>{" "}
          while continuously improving my problem-solving and teamwork skills.
        </p>
      </div>
    </section>
  );
}
