export default function Header() {
  return (
    <header className="text-center">
      {/* Top Separator */}
      <hr className="border-gray-300" />

      {/* Name */}
      <h1 className="text-2xl my-1 font-serif font-bold text-gray-900">
        Nitesh Shah
      </h1>

      <hr className="border-gray-300 mb-1" />

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-1 text-[13px] text-gray-700 leading-relaxed sm:text-[13px]">
        <p>Yamunanagar, Haryana, India 135001</p>

        <p>
          <a href="tel:+917988576105" className="hover:underline">
            Phone: +91 79885 76105
          </a>{" "}
          |{" "}
          <a
            href="mailto:niteshshah028@gmail.com"
            className="hover:underline"
          >
            Email: niteshshah028@gmail.com
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/nitesh-kumar-b18348346"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://portfolio-ten-jade-21.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Portfolio
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/Nitesh47kumars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </header>
  );
}
