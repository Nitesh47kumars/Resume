export default function Header() {
    return (
      <header className="text-center my-3 mb-6">
        <hr/>
        <h1 className="text-3xl my-3 font-serif font-bold text-gray-900">Nitesh Shah</h1>
        <hr/>
        <hr className="h-[3px] bg-black mt-[2px]"/>
        <p className="text-[12px] text-gray-700 my-3 text-center">
          <span>Yamunanagar, India 135001</span>
          <span className="mx-2 text-black">♦</span>
          <a href="tel:+917988576105" className="hover:underline">
            +91 79885 76105
          </a>
          <span className="mx-2 text-black">♦</span>
          <a href="mailto:niteshshah028@gmail.com" className="hover:underline">
            niteshshah028@gmail.com
          </a>
        </p>
      </header>
    );
  }
  