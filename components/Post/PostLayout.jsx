import React from "react";
import style from "../components.module.css";
import img from "../../public/post.jpg";
import Image from "next/image";

export default function PostLayout({ details }) {
  console.log(details);
  return (
    <div className=" max-w-5xl m-auto ">
      <h1
        className={`${style.post_page_h1_shadow} text-2xl py-2 text-center dark:text-white`}
      >
        {" "}
        {details.title}
      </h1>
      <div className=" m-auto relative h-40 max-w-md">
        <Image src={img} fill style={{ objectFit: "cover" }} priority />
      </div>
      <div className=" m-auto py-5 dark:text-slate-300">{details.post}</div>
    </div>
  );
}
