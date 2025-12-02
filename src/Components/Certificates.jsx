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
            </div>
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {cert.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
