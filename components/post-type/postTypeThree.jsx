import Image from "next/image";
import img from "../../public/post.jpg";
import style from "../components.module.css";
import Link from "next/link";

export default function postTypeThree() {
  return (
    <div
      className={` ${style.post_list_shadow} w-5/12 m-5 p-2  bg-[#F6F6F6]  dark:bg-[#17182c] `}
    >
      <div className=" m-auto max-w-3xl my-2">
        <div>
          <div className={`${style.post_p_hover} relative h-60`}>
            <Image src={img} fill style={{ objectFit: "cover" }} priority />
            <div
              className={`${style.post_list_category} absolute top-0 right-0 px-2 bg-slate-600`}
            >
              <span>Health and Wellness</span>
            </div>
            <div className=" absolute line-clamp-4 p-1 bottom-0 bg-[#ffffff7a] w-full">
              <p className="dark:text-slate-300 ">
                Emotional intelligence plays a vital role in fostering healthy
                relationships and effective communication. Explore the core
                components of emotional intelligence, practical tips for
                developing it, and how it can transform your interactions.
              </p>
            </div>
          </div>
          <div className="  relative dark:text-slate-400 ">
            <div className=" mt-5">
              <Link href={""} className=" float-right">
                <strong className="dark:text-slate-200 pt-3 ">
                  Emotional Intelligence: The Key to Building Stronger
                  Relationships and Enhancing Communication
                </strong>
              </Link>
              <div className="flex justify-between px-1">
                <div className="flex justify-between">
                  <div className=" relative w-5 rounded-3xl justify-around">
                    <Image
                      src={img}
                      fill
                      className=" rounded-full"
                      style={{ objectFit: "cover" }}
                    ></Image>
                  </div>
                  <Link href={""}>Admin post</Link>
                </div>
                <div className="">2023.06.14</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
