import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <section>
      <SectionTitle title="Summary" />
      <div className="text-sm text-gray-700 leading-snug space-y-1.5">
        <p>
          I'm <span className="font-semibold">Nitesh Shah</span>, a 20-year-old front-end developer currently pursuing a <span className="font-semibold">Bachelor's in Computer Applications (BCA)</span> at Guru Nanak Khalsa College, Yamuna Nagar. I enjoy building clean, interactive, and responsive user interfaces using HTML, CSS, JavaScript, React, Framer Motion, Tailwind CSS, and Git & GitHub. Besides coding, I love video editing, which enhances my creativity and attention to detail.
        </p>
        <p>
          Currently in my <span className="font-semibold">2nd year (3rd semester)</span>, with hands-on experience from projects like a Portfolio website and Code Snippet tool. I aim to grow as a developer while contributing effectively through teamwork, problem-solving, and dedication.
        </p>
      </div>
    </section>
  );
}
