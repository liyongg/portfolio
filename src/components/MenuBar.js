import "./Circle.css";

export default function MenuBar() {
  return (
    <div className="flex justify-between items-center h-12 bg-gray-200 px-4">
      <div>
        <img src="/icon.png" alt="Logo" className="h-6 w-6" />
      </div>
      <div>
        <span>panliyong.nl</span>
      </div>
      <div className="text-gray-700 box"></div>
    </div>
  );
}
