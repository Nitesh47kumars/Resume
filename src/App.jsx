import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Summary from "./Components/Summary";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 space-y-8">
        <Header/>
        <Summary/>
        <Education />
        <Skills />
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}
