export default function Header() {
  return (
    <header className="text-center mb-3">
      <hr />
      <h1 className="text-2xl my-2 font-serif font-bold text-gray-900">Nitesh Shah</h1>
      <hr className="h-[2px] bg-black mt-[1px]" />
      <p className="text-[12px] text-gray-700 my-2 text-center">
        Yamunanagar, India 135001
        <span className="mx-1 text-black">♦</span>
        <a href="tel:+917988576105" className="hover:underline">+91 79885 76105</a>
        <span className="mx-1 text-black">♦</span>
        <a href="mailto:niteshshah028@gmail.com" className="hover:underline">niteshshah028@gmail.com</a>
      </p>
    </header>
  );
}
