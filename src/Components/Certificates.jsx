import SectionTitle from "./SectionTitle";

const certificates = [
  {
    id: 1,
    title: "Young Innovator Mindset Certification",
    issuer: "International Institute of Organized Research (I2OR)",
    date: "2025",
    file: "Mindset_Certificate.pdf",
  },
  {
    id: 2,
    title: "Hands-On Workshop — E-Commerce with React & MongoDB",
    issuer: "Guru Nanak Khalsa College, Yamuna Nagar",
    date: "06 Nov 2025",
    file: "Workshop_Certificate.pdf",
  },
  {
    id: 3,
    title: "Expert Talk — AI & 21st Century Skills",
    issuer: "Guru Nanak Khalsa College, Yamuna Nagar",
    date: "11 Nov 2025",
    file: "ExpertTalk_Certificate.pdf",
  },
  {
    id: 4,
    title: "Tata Crucible Campus Quiz 2025 — Prelims Participation",
    issuer: "Tata Crucible",
    date: "2025",
    file: "TataQuiz_Certificate.pdf",
  }
];

export default function Certificates() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title="Certificates" />

      <div className="space-y-2">
        {certificates.map((cert, idx) => (
          <div key={cert.id} className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h3 className="font-medium text-xs">{cert.title}</h3>
              <span className="text-xs whitespace-nowrap">{cert.date}</span>
            </div>
            <p className="text-xs">{cert.issuer}</p>

            {/* Optional: hyphen-based divider */}
            {idx !== certificates.length - 1 && (
              <p className="text-gray-400 tracking-widest">-------------------------------------------</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
