import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="flex items-start justify-between text-xs">
        <div className="space-y-0.5">
          <p className="text-[13px] font-bold text-gray-900">
            Bachelor of Computer Applications (BCA)
          </p>
          <p className="text-gray-700 font-medium">
            Guru Nanak Khalsa College, Yamunanagar
          </p>
          <p className="text-gray-600">
            2nd Year, 4th Semester
          </p>
        </div>
        <div className="text-right shrink-0 space-y-0.5">
          <p className="font-semibold text-gray-800">Expected: July 2027</p>
          <p className="text-gray-500">Yamunanagar, Haryana</p>
        </div>
      </div>
    </section>
  );
}