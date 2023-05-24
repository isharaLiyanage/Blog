import Image from "next/image";
import React from "react";
import img from "../../public/post.jpg";
import style from "../components.module.css";
import Link from "next/link";

export default function PostTypeOne() {
  return (
    <div className=" m-auto max-w-3xl my-2">
      <div
        className={` ${style.post_list_shadow} flex justify-center gap-2 bg-[#F6F6F6]  dark:bg-[#22233f] `}
      >
        <div className="  w-2/5 relative">
          <Image src={img} fill style={{ objectFit: "cover" }} priority />
        </div>
        <div className=" w-3/5 relative dark:text-slate-400 ">
          <div
            className={`${style.post_list_category} absolute top-0 right-0 px-2 bg-slate-600`}
          >
            <p>Health and Wellness</p>
          </div>
          <Link href={"./post/jgjg"}>
            <div className=" mt-5 ">
              <strong className="dark:text-slate-200 pt-3 ">
                Emotional Intelligence: The Key to Building Stronger
                Relationships and Enhancing Communication
              </strong>
              <p className="dark:text-slate-300 line-clamp-4 ">
                Emotional intelligence plays a vital role in fostering healthy
                relationships and effective communication. Explore the core
                components of emotional intelligence, practical tips for
                developing it, and how it can transform your interactions.
              </p>
            </div>
          </Link>
          <Link href={""} className=" float-right">
            {" "}
            See More ...
          </Link>
        </div>
      </div>
    </div>
  );
}
