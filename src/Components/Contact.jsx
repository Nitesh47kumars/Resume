import SectionTitle from "./SectionTitle";

export default function Contact() {
  const profiles = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/nitesh-kumar-b18348346/",
    },
    {
      name: "Portfolio",
      link: "https://portfolio-ten-jade-21.vercel.app/",
    },
    {
      name: "GitHub",
      link: "https://github.com/Nitesh47kumars",
    },
  ];

  return (
    <section>
      <SectionTitle title="Online Profiles" />
      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
        {profiles.map((profile) => (
          <li key={profile.name}>
            <strong>{profile.name}:</strong>{" "}
            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all"
            >
              {profile.link}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
