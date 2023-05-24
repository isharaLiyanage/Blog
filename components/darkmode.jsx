"use client";
import { useState, useEffect } from "react";
import { AiFillBulb } from "react-icons/ai";
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedDarkMode = !darkMode;
    setDarkMode(updatedDarkMode);
    localStorage.setItem("darkMode", updatedDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      {" "}
      <button className="text-black dark:text-white" onClick={toggleDarkMode}>
        {darkMode ? <AiFillBulb /> : <AiFillBulb />}
      </button>
    </>
  );
};

export default DarkModeToggle;
