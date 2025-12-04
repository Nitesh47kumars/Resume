export default function SectionTitle({ title }) {
  return (
    <div className="w-full py-1 my-1">
      <h2 className="text-lg font-bold uppercase text-black tracking-wide">
        {title}
      </h2>
      <div className="w-full h-[2px] bg-gray-900 mt-1"></div>
    </div>
  );
}
