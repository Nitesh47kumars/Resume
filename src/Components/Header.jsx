export default function Header() {
    return (
      <header className="text-center border-b border-gray-300 my-3">
        <hr/>
        <h1 className="text-3xl my-3 font-serif font-bold text-gray-900">Nitesh Shah</h1>
        <hr/>
        <hr className="h-[3px] bg-black mt-[2px]"/>
        <p className="text-[12px] text-gray-600 space-x-4 my-3">
          <span>📞 <a href="tel:+917988576105" className="hover:underline">+91 79885 76105</a></span>
          <span>📧 <a href="mailto:niteshshah028@gmail.com" className="hover:underline">niteshshah028@gmail.com</a></span>
          <span>🌐 <a href="https://portfolio-ten-jade-21.vercel.app/projects/info-nation" target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio</a></span>
          <span>💼 <a href="https://github.com/Nitesh47kumars" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></span>
        </p>
      </header>
    );
  }
  