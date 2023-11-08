"use client";
import MenuBar from "@/components/MenuBar";
import Taskbar from "@/components/TaskBar";

export default function Home() {
  return (
    <>
      <Taskbar />
      <MenuBar />
      <div class="min-h-screen flex flex-col items-center justify-center">
        <p class="text-9xl text-center font-semibold">Hi, I am Michel Pan</p>
      </div>
    </>
  );
}
