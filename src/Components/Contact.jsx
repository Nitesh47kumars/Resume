import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section>
      <SectionTitle title="Contact" />
      <div className="text-sm text-gray-700 space-y-2">
        <p>
          📧 <a
            href="mailto:niteshshah028@gmail.com"
            className="hover:underline"
          >
            niteshshah028@gmail.com
          </a>
        </p>
        <p>
          💼 <a
            href="https://www.linkedin.com/in/nitesh-kumar-b18348346/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p>
          🌐 <a
            href="https://portfolio-ten-jade-21.vercel.app/projects/info-nation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            Portfolio
          </a>
        </p>
        <p>
          🧠 <a
            href="https://github.com/Nitesh47kumars"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
