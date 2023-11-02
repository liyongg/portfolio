"use client";

export default function Home() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-gray-100 text-black flex items-center justify-center">
      <div className="flex space-x-4">
        <button className="hover:bg-gray-300 px-4 py-2 rounded">About</button>
        <button className="hover:bg-gray-300 px-4 py-2 rounded">Projects</button>
        <button className="hover:bg-gray-300 px-4 py-2 rounded">Contact</button>
      </div>
    </div>
  );
}
