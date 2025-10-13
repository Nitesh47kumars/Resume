export default function Header() {
    return (
      <header className="text-center border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Nitesh Shah</h1>
        <p className="text-indigo-600 font-semibold my-1">
          Front-End Developer | React Enthusiast
        </p>
        <p className="text-sm text-gray-600 space-x-4">
          <span>📞 <a href="tel:+917988576105" className="hover:underline">+91 79885 76105</a></span>
          <span>📧 <a href="mailto:niteshshah028@gmail.com" className="hover:underline">niteshshah028@gmail.com</a></span>
          <span>🌐 <a href="https://portfolio-ten-jade-21.vercel.app/projects/info-nation" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio</a></span>
          <span>💼 <a href="https://github.com/Nitesh47kumars" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></span>
        </p>
      </header>
    );
  }
  