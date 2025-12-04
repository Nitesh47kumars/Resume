import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="text-xs space-y-1">
        <p className="font-semibold">
          Bachelor of Computer Applications (BCA)
        </p>
        <p className="font-semibold text-gray-900">
          Guru Nanak Khalsa College, Yamunanagar
        </p>
        <p>
          <span className="font-semibold text-gray-800">Expected Graduation:</span> July 2027
        </p>
        <p>
          <span className="font-semibold text-gray-800">Current Year:</span> 2nd Year, 3rd Semester
        </p>
      </div>
    </section>
  );
}
