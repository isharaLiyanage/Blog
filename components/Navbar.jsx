"use client";

import { useEffect, useState } from "react";
import DarkModeToggle from "./darkmode";
import Link from "next/link";
import { AiOutlineAlignLeft } from "react-icons/ai";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 480 && setOpenNav(false)
    );
  }, []);

  let storedData;
  useEffect(() => {
    storedData = localStorage?.getItem("name");
    setUser(storedData);
    console.log(storedData);
  }, [storedData]);

  return (
    <div className=" fixed w-full z-30">
      <nav className="bg-gray-200 dark:bg-gray-900 py-4 ">
        <div className="font-bold text-center  sm:hidden block dark:text-gray-300">
          <Link href={"./"}>KnowledgeJunction.com</Link>
        </div>
        <div className="container   max-w-5xl mx-auto flex items-center justify-between px-2">
          <div className="font-bold sm:block hidden dark:text-gray-300">
            <Link href={"./"}>KnowledgeJunction.com</Link>
          </div>

          <form action="">
            {" "}
            <input
              type="search"
              className=" border-x-rose-800  w-32 sm:w-fit bottom-1 text-center bg-slate-100 dark:bg-slate-600 rounded-md"
              name="search"
              placeholder="Find articles"
            />
          </form>

          <ul className="md:flex   items-center hidden">
            <li className="mr-4">
              <a
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="mr-4">
              <a
                className="text-gray-800  dark:text-gray-300 hover:text-gray-600"
                href="#"
              >
                About
              </a>
            </li>
            <li className="mr-4">
              <a
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600"
                href="#"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600"
                href="#"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex">
            {user ? (
              <a
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600 mr-1"
                href="/user"
              >
                {user}
              </a>
            ) : (
              <a
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600 mr-1"
                href="/user"
              >
                log In / Sign Up
              </a>
            )}

            <DarkModeToggle />
          </div>
          <button
            className="md:hidden text-gray-800 dark:text-gray-300 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={toggleNavbar}
          >
            <AiOutlineAlignLeft />
          </button>
        </div>
        <ul
          className={` flex-grow items-center block pl-5 md:hidden  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="mr-4">
            <a
              className="text-gray-800 dark:text-gray-300 hover:text-gray-600"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mr-4">
            <a
              className="text-gray-800 dark:text-gray-300 hover:text-gray-600"
              href="#"
            >
              About
            </a>
          </li>
          <li className="mr-4">
            <a
              className="text-gray-800 dark:text-gray-300 hover:text-gray-600"
              href="#"
            >
              Services
            </a>
          </li>

          <li>
            <a
              className="text-gray-800 dark:text-gray-300 hover:text-gray-600"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
