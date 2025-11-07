import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-semibold">
            Bachelor of Computer Applications (BCA)
          </span>{" "}
          — Computer Applications
        </p>
        <p className="font-semibold text-gray-900">
          Guru Nanak Khalsa College, Yamunanagar
        </p>
        <p>
          <span className="text-gray-800">Expected Graduation:</span> July 2027
        </p>
        <p>Current Year: 2nd Year (3rd Semester)</p>
      </div>
    </section>
  );
}
