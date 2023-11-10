import TaskBarItem from "./TaskBarIcon";

export default function Taskbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-gray-100 text-black flex items-center justify-center">
      <div className="flex space-x-4">
        <TaskBarItem name="About" />
        <TaskBarItem name="Projects" />
        <TaskBarItem name="Contact" />
      </div>
    </div>
  );
}
