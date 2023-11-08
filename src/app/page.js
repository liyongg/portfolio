"use client";
import MenuBar from "@/components/MenuBar";
import Taskbar from "@/components/TaskBar";

export default function Home() {
  return (
    <>
      <MenuBar />

      <div class="min-h-screen flex flex-col items-center justify-center text-center">
        <p class="font-semibold text-4xl">Hi, I am Michel Pan</p>
      </div>

      <Taskbar />
    </>
  );
}
