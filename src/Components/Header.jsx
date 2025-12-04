import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function Header() {
  return (
    <header className="space-y-2 mb-5">

      <h1 className="text-3xl font-extrabold tracking-wide text-gray-900 uppercase mb-1">
        NITESH SHAH
      </h1>

      <h2 className="text-sm font-bold text-blue-600 tracking-wide">
        Front-End Developer
      </h2>

      <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-gray-800 mt-1">

        <span className="flex items-center gap-1">
          <FaPhoneAlt className="text-blue-600" /> +91 79885 76105
        </span>

        <span className="flex items-center gap-1">
          <FaEnvelope className="text-blue-600" /> niteshshah028@gmail.com
        </span>

        <span className="flex items-center gap-[2px]">
          <FaLinkedin className="text-blue-600" /> LinkedIn 
          <span className="mx-1">|</span>
          <FaGlobe className="text-blue-600" /> Portfolio
          <span className="mx-1">|</span>
          <FaGithub className="text-blue-600" /> GitHub
        </span>

        <span className="flex items-center">
          <HiLocationMarker className="text-blue-600" /> Yamunanagar, Haryana, India 135001
        </span>

      </div>
    </header>
  );
}
