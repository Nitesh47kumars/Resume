import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center p-2">
      <div
        id="resume"
        className="w-full max-w-2xl bg-white shadow-md rounded-lg p-4 py-3 space-y-0 leading-snug text-sm"
      >
        <Header />
        <Summary />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
