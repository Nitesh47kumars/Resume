export default function SectionTitle({ title }) {
  return (
    <div className="relative flex items-center justify-center w-full my-4">
      <div className="absolute inset-x-0 h-px bg-black"></div>
      <h2 className="relative bg-white px-4 text-lg font-semibold font-serif text-gray-800">
        {title}
      </h2>
    </div>
  );
}
