export default function Certificates({ certificates = [] }) {
  return (
    <section className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Certificates</h2>

      <div className="space-y-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="border rounded-lg p-3 bg-white shadow-sm flex items-start justify-between"
          >
            <div>
              <h3 className="font-medium text-sm">{cert.title}</h3>
              <p className="text-xs text-gray-600">{cert.issuer}</p>
              {cert.file && (
                <a
                  href={`/${cert.file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-600 underline mt-1 inline-block"
                >
                  View Certificate
                </a>
              )}
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const certificates = [
  { id: 1, title: "Mindset Certificate", issuer: "Organization Name", date: "2024", file: "Mindset_Certificate.pdf" },
  { id: 2, title: "Participation Certificate", issuer: "Organization Name", date: "2024", file: "Participation_Certificate.pdf" },
  { id: 3, title: "Workshop Certificate", issuer: "Organization Name", date: "2024", file: "Workshop_Certificate.pdf" },
];