export default function TaskBarItem({ name = "WorksThis" }) {
  return (
    <div className="flex flex-col items-center hover:bg-gray-300 px-2 py-2 rounded">
      <img src="/icon.svg" alt="Logo" className="h-8 w-8" />
      <span className="text-xs">{name}</span>
    </div>
  );
}
