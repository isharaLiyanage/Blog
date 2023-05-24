import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 dark:text-white">
      <div className=" max-w-4xl flex justify-between py-2 m-auto ">
        <div className=" w-3/12 ">
          <div className=" h-1 w-full bg-white dark:bg-slate-500"></div>
          <p className=" text-center">KnowledgeJunction.com</p>
          <div className=" h-1 w-full bg-white dark:bg-slate-500"></div>
        </div>
        <div className=" w-3/12 ">
          <h5 className=" Links">
            <ul>
              <li>Privacy Policy</li>
            </ul>
          </h5>
        </div>
      </div>
    </div>
  );
}
