import TaskBarItem from "./TaskBarIcon";

export default function Taskbar() {
  const taskBarItems = ["About", "Projects", "Contact"];

  const taskBarWidth = `${taskBarItems.length * 80}px`;

  return (
    <div
      className="fixed bottom-2 left-0 right-0 mx-auto w-full h-16 bg-gray-100 text-black flex items-center justify-center"
      style={{ width: taskBarWidth, borderRadius: "1rem" }}
    >
      <div className="flex space-x-4">
        {taskBarItems.map((itemName) => (
          <TaskBarItem key={itemName} name={itemName} />
        ))}
      </div>
    </div>
  );
}
