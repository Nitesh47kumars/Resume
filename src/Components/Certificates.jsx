import SectionTitle from "./SectionTitle";

const certificates = [
  {
    id: 1,
    title: "Young Innovator Mindset Certification",
    issuer: "International Institute of Organized Research (I2OR)",
    date: "2025",
    slug: "mindset",
  },
  {
    id: 2,
    title: "Hands-On Workshop — E-Commerce with React & MongoDB",
    issuer: "Guru Nanak Khalsa College, Yamuna Nagar",
    date: "06 Nov 2025",
    slug: "workshop",
  },
  // {
  //   id: 3,
  //   title: "Expert Talk — AI & 21st Century Skills",
  //   issuer: "Guru Nanak Khalsa College, Yamuna Nagar",
  //   date: "11 Nov 2025",
  //   slug: "experttalk",
  // },
  {
    id: 4,
    title: "Tata Crucible Campus Quiz 2025 — Prelims Participation",
    issuer: "Tata Crucible",
    date: "2025",
    slug: "tataquiz",
  },
];

export default function Certificates() {
  return (
    <section className="w-full mx-auto">
      <SectionTitle title="Certificates" />
      <div className="space-y-2.5">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1">
                <p className="font-medium text-xs text-gray-900">{cert.title}</p>
                <a
                  href={`https://portfolio-ten-jade-21.vercel.app/Certificates/${cert.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="12"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                  </svg>
                </a>
              </div>
              <span className="text-xs whitespace-nowrap">{cert.date}</span>
            </div>
            <p className="text-xs">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}