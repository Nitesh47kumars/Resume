import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <section>
      <SectionTitle title="Summary" />
      <div className="text-xs leading-relaxed space-y-2">
        <p>
          Frontend Developer (Fresher) with strong foundations in{" "}
          <strong>
            HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS, Redux, Git, and GitHub
          </strong>.
          Currently pursuing a Bachelor of Computer Applications (BCA) at Guru Nanak
          Khalsa College, Yamunanagar, with hands-on experience through academic and
          personal projects.
        </p>

        <p>
          Built responsive and accessible web applications including a personal
          portfolio, an online code editor, and a resume builder. Passionate about
          creating intuitive user interfaces, writing clean and reusable components,
          and continuously learning modern frontend technologies.
        </p>
      </div>
    </section>
  );
}
