import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="text-sm space-y-1">
        <p>
          Pursuing Bachelor of Computer Applications (BCA) <br />
          <span className="italic text-gray-600">
            Guru Nanak Khalsa College, Yamuna Nagar
          </span>
        </p>
        <p className="text-gray-600">Joined July 2024 – Present (3rd Semester)</p>
      </div>
    </section>
  );
}
