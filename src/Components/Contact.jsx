import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section>
      <SectionTitle title="Website, Portfolio, Profiles" />
      <ul className="text-[13px] text-black list-disc list-inside space-y-1">
        <li>
          <a
            href="https://www.linkedin.com/in/nitesh-kumar-b18348346/"
            target="_blank"
            rel="noopener noreferrer"
            className="/hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://portfolio-ten-jade-21.vercel.app/projects/info-nation"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nitesh47kumars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
