export default function SectionTitle({ title }) {
  return (
    <div className="w-full py-1 my-1">
      <h2 className="text-lg font-bold uppercase text-black tracking-wide">
        {title}
      </h2>
      <hr className="border-t-2 border-gray-900" />
    </div>
  );
}