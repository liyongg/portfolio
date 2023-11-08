"use client";

export default function Home() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-gray-100 text-black flex items-center justify-center">
      <div className="flex space-x-4">
        <div className="flex flex-col items-center hover:bg-gray-300 px-2 py-2 rounded">
          <img src="./icon.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xs">About</span>
        </div>

        <div className="flex flex-col items-center hover:bg-gray-300 px-2 py-2 rounded">
          <img src="./icon.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xs">Projects</span>
        </div>

        <div className="flex flex-col items-center hover:bg-gray-300 px-2 py-2 rounded">
          <img src="./icon.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xs">Contact</span>
        </div>
      </div>
    </div>
  );
}
