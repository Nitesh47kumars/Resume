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
    title: "Certificate of Participation",
    issuer: "Guru Nanak Khalsa College, Yamuna Nagar",
    date: "12 Nov 2025",
    file: "Participation_Certificate.pdf",
  },
];

export default function Certificates() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title="Certificates" />

      <div className="space-y-3">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-sm">{cert.title}</h3>

                {cert.file && (
                  <a
                    href={`/${cert.file}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-600 underline"
                  >
                    LINK
                  </a>
                )}
              </div>

              <span className="text-xs text-gray-500 whitespace-nowrap">
                {cert.date}
              </span>
            </div>

            <p className="text-xs text-gray-600">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
