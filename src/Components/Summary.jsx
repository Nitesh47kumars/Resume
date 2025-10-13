import SectionTitle from "./SectionTitle";

export default function Summary() {
  return (
    <section>
      <SectionTitle title="Summary" />
      <p className="text-sm text-gray-700 leading-relaxed">
        I’m <span className="font-semibold">Nitesh Shah</span>, a 20-year-old front-end developer currently
        pursuing a <span className="font-semibold">Bachelor’s in Computer Applications (BCA)</span> at
        Guru Nanak Khalsa College, Yamuna Nagar.  
        I enjoy crafting clean, interactive, and responsive user interfaces using
        <span className="font-medium"> HTML, CSS, JavaScript, React, Framer Motion, Tailwind CSS, and Git & GitHub</span>.  
        Besides coding, I’m also passionate about <span className="font-semibold">video editing</span>,
        which helps me bring creativity and attention to detail into my design and development work.
      </p>
    </section>
  );
}
