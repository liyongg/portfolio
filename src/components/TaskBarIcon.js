import Image from "next/image";

export default function TaskBarItem({ name }) {
  return (
    <div className="flex flex-col items-center hover:bg-gray-300 px-2 py-2 rounded">
      <Image
        src={`/${name.toLowerCase()}.svg`}
        width="32"
        height="32"
        alt="Logo"
      />
      <span className="text-xs">{name}</span>
    </div>
  );
}
