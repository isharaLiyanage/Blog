"use client";
import Link from "next/link";
import style from "./components.module.css";
import { useState } from "react";

export default function CategoryList() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setIsDown(false);
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDown(false);
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };
  return (
    <div
      className={` w-11/12  m-auto  z-10 dark:bg-black dark:text-slate-200 `}
    >
      <ul
        className={`${style.list} flex  gap-6 flex-nowrap whitespace-nowrap overflow-x-auto`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <li>
          <Link href={""}> Personal Development</Link>
        </li>
        <li>
          <Link href={""}> Relationships and Communication</Link>
        </li>
        <li>
          <Link href={""}> Health and Wellness</Link>
        </li>
        <li>
          <Link href={""}> Self-Discovery</Link>
        </li>
        <li>
          <Link href={""}> Goal Setting and Achievement</Link>
        </li>
        <li>
          <Link href={""}> Emotional Well-being</Link>
        </li>
        <li>
          <Link href={""}> Career Advancement</Link>
        </li>
        <li>
          <Link href={""}> Mindset and Motivation</Link>
        </li>
      </ul>
    </div>
  );
}
