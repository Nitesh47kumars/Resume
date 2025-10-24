import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div className="text-sm space-y-0.5">
        <p><span className="font-semibold">Bachelor of Computer Applications:</span> Computer Applications, 10/2025</p>
        <p className="font-semibold">Guru Nanak Khalsa College - Yamuna Nagar</p>
        <p className="text-gray-600">3rd Semester</p>
      </div>
    </section>
  );
}
