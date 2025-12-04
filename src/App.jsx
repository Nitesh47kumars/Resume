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
        className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4 py-3 space-y-3 leading-snug text-sm"
      >
        <Header />

        <div className="grid grid-cols-2 gap-4">
          <Summary />
          <Skills />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Education />
          <Certificates />
        </div>

        <Projects />
      </div>
    </div>
  );
}
