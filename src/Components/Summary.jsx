import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <section>
      <SectionTitle title="Summary" />
      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
        <p>
          I'm <span className="font-semibold">Nitesh Shah</span>, a 20-year-old front-end developer currently pursuing a
          <span className="font-semibold"> Bachelor's in Computer Applications (BCA)</span> at Guru Nanak Khalsa College,
          Yamuna Nagar. I enjoy crafting clean, interactive, and responsive user interfaces using HTML, CSS, JavaScript,
          React, Framer Motion, Tailwind CSS, and Git & GitHub. Besides coding, I'm also passionate about video editing,
          which helps me bring creativity and attention to detail into my design and development work.
        </p>
        <p>
          Currently in my <span className="font-semibold">2nd year (3rd semester)</span>, with hands-on experience from
          academic and personal projects such as a Portfolio website and a Code Snippet tool. I aim to grow as a
          developer while contributing effectively through teamwork, problem-solving, and dedication.
        </p>
      </div>
    </section>
  );
}
