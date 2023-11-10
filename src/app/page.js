"use client";
import MenuBar from "@/components/MenuBar";
import Taskbar from "@/components/TaskBar";

export default function Home() {
  return (
    <>
      <MenuBar />

      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <p className="font-semibold text-4xl">Hi, I am Michel Pan</p>
      </div>

      <Taskbar />
    </>
  );
}
