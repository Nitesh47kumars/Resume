import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function Header() {
  return (
    <header className="space-y-2 mb-2">

      <h1 className="text-3xl font-extrabold tracking-wide text-gray-900 uppercase mb-1">
        NITESH SHAH
      </h1>

      <h2 className="text-sm font-bold text-blue-600 tracking-wide">
        Front-End Developer
      </h2>

      <div className="flex flex-wrap items-center gap-0 text-[11px] font-semibold text-gray-800 mt-1">

        <span className="flex items-center gap-1">
          <a
            href="tel:+917988576105"
            className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
          >
            <FaPhoneAlt className="text-blue-600" /> +91 79885 76105
          </a>
        </span>

        <span className="flex items-center gap-1">
          <a
            href="mailto:niteshshah028@gmail.com"
            className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
          >
            <FaEnvelope className="text-blue-600" /> niteshshah028@gmail.com
          </a>
        </span>

        <span className="flex items-center gap-1">
          <a
            href="https://www.linkedin.com/in/nitesh-kumar-b18348346/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
          >
            <FaLinkedin className="text-blue-600"  /> LinkedIn
          </a>

          <span>|</span>

          <a
            href="https://portfolio-ten-jade-21.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
          >
            <FaGlobe className="text-blue-600" /> Portfolio
          </a>

          <span>|</span>

          <a
            href="https://github.com/Nitesh47kumars"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-800 hover:text-blue-600"
          >
            <FaGithub className="text-blue-600"  /> GitHub
          </a>
        </span>

        <span className="flex items-center">
          <HiLocationMarker className="text-blue-600" /> Yamunanagar, Haryana, India 135001
        </span>

      </div>
    </header>
  );
}
