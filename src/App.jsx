import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex justify-center p-2">
      <div
        id="resume"
        className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8 space-y-2.5 leading-snug text-sm"
      >
        <Header />
        <Summary />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
      </div>
    </div>
  );
}
