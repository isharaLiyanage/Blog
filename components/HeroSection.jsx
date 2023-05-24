import style from "./components.module.css";
export default function HeroSection() {
  return (
    <div
      className={` ${style.hero} bg-black h-[559px]  relative m-auto flex justify-center items-center `}
      id="hero-bg"
    >
      <div className=" absolute  w-full h-full max-h-[559px]  bg-[#11226283] dark:bg-[#081235c2]"></div>
      <div className="w-9/12 z-10">
        <h1
          className={`${style.hero_shadow} text-center font-serif  text-5xl text-[#ffffff]  `}
        >
          Unlocking Your Potential Empowering Articles <br /> for <br />{" "}
          Personal Growth
        </h1>
        <form action="" className=" flex gap-1 mt-4 justify-center">
          {" "}
          <input
            type="search"
            className=" w-4/12 placeholder:text-[#B3B3B3] px-2 dark:placeholder:text-[#747474d2]  bg-[#FFFFFF]  rounded-sm"
            name="search"
            placeholder="Find articles, stories, and more"
          />
          <button className=" w-2/12 px-4 bg-[#3596F0] dark:bg-[#140661]  dark:text-[#d6d6d6] ">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}
