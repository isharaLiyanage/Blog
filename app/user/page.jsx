"use client";
import React, { useRef, useState } from "react";
import style from "./style.module.css";

export default function page() {
  const [data, setData] = useState(null);
  const [isLog, setIsLog] = useState(false);
  const [err, setErr] = useState(null);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const conPassword = useRef(null);

  const logUsername = useRef(null);
  const logPassword = useRef(null);
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(username.current.value);
    try {
      const res = await fetch("/api/Auth/LogIn", {
        method: "POST",
        body: JSON.stringify({
          username: logUsername.current.value,
          password: logPassword.current.value,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setData(data);
        console.log(data);
        console.log(data.name);
        localStorage.setItem("name", data.name);
      } else {
        console.log("eeee");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handelSubmitRegister = async (e) => {
    e.preventDefault();
    let pass;
    if (password.current.value === conPassword.current.value) {
      pass = password.current.value;

      try {
        const res = await fetch("/api/Auth/register", {
          method: "POST",
          body: JSON.stringify({
            username: username.current.value,
            email: email.current.value,
            password: pass,
            headers: {
              "Content-Type": "application/json",
            },
          }),
        });
        if (res.ok) {
          const data = await res.json();
          setData(data);
          console.log(data);
        } else {
          console.log("eeee");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setErr("1");
    }
  };

  return (
    <div className={` ${style.hero}`}>
      <div
        className={`${
          isLog ? "block" : "hidden"
        } flex w-full h-screen justify-center items-center dark:bg-[#00000063]`}
      >
        <div className=" p-5 bg-slate-300 dark:bg-slate-900 shadow-md">
          <h1 className=" mb-3 text-center text-3xl  font-medium text-slate-800 dark:text-slate-300">
            {" "}
            Login{" "}
          </h1>
          <form action="" onSubmit={handelSubmit} className=" w-72">
            <label
              className=" float-left  text-slate-800 dark:text-slate-300"
              htmlFor="username "
            >
              User Name :
            </label>

            <input
              className=" float-right text-slate-800 dark:text-slate-300"
              type="text"
              placeholder=" User Name"
              name="username"
              required
              ref={logUsername}
              id=""
            />
            <br />
            <div className=" mt-5"></div>
            <label
              className=" Password mt-5 text-slate-800 dark:text-slate-300"
              htmlFor="password"
            >
              Password :
            </label>
            <input
              className=" float-right text-slate-800 dark:text-slate-300"
              placeholder="Password"
              type="password"
              name="password"
              required
              ref={logPassword}
              id=""
            />
            <button
              type="submit"
              className=" relative w-full  mt-4 rounded-sm px-5 py-2 text-slate-800 dark:text-slate-300 dark:bg-emerald-500 bg-emerald-700"
            >
              Log In
            </button>

            {data?.error ? (
              <p className="relative w-full text-center mt-4 rounded-sm px-5 py-2 text-slate-800 dark:text-slate-300 dark:bg-red-500 bg-red-700">
                {data.error}
              </p>
            ) : (
              ""
            )}
            {data?.massage ? (
              <p className="relative w-full text-center mt-4 rounded-sm px-5 py-2 text-slate-800 dark:text-slate-300 dark:bg-emerald-500 bg-emerald-700">
                {data.massage}
              </p>
            ) : (
              ""
            )}
            <p
              onClick={() => {
                setIsLog(!isLog);
              }}
              className="relative w-full text-center mt-4 rounded-sm px-5 py-2 border  cursor-pointer text-slate-800 dark:text-slate-300 dark:outline-emerald-500 outline-emerald-700"
            >
              Register
            </p>
          </form>
        </div>
      </div>

      <div
        className={`${
          isLog ? "hidden" : "block"
        } flex w-full h-screen justify-center items-center dark:bg-[#00000063] `}
      >
        <div className=" p-5 bg-slate-300 dark:bg-slate-900 shadow-2xl rounded-sm ">
          <h1 className=" mb-3 text-center text-3xl  font-medium text-slate-800 dark:text-slate-300">
            {" "}
            Register{" "}
          </h1>
          <form action="" onSubmit={handelSubmitRegister} className=" w-72">
            <label
              className=" float-left  text-slate-800 dark:text-slate-300"
              htmlFor="username "
            >
              User Name :
            </label>

            <input
              className=" float-right text-slate-800 dark:text-slate-300"
              type="text"
              placeholder=" User Name"
              name="username"
              required
              ref={username}
              id=""
            />
            <br />
            <div className=" mt-5"></div>
            <label
              className=" email mt-5 text-slate-800 dark:text-slate-300"
              htmlFor="email"
            >
              email :
            </label>
            <input
              className=" float-right text-slate-800 dark:text-slate-300"
              placeholder="email"
              type="email"
              name="email"
              required
              ref={email}
              id=""
            />
            <br />
            <div className=" mt-5"></div>
            <label
              className=" Password mt-5 text-slate-800 dark:text-slate-300"
              htmlFor="password"
            >
              Password :
            </label>
            <input
              className=" float-right text-slate-800 dark:text-slate-300"
              placeholder="Password"
              type="password"
              name="password"
              required
              ref={password}
              id=""
            />
            <br />
            <div className=" mt-5"></div>
            <label
              className=" conformPassword mt-5 text-slate-800 dark:text-slate-300"
              htmlFor="conformPassword"
            >
              conform <br /> Password :
            </label>
            <input
              className=" float-right text-slate-800 dark:text-slate-300"
              placeholder="conform Password"
              type="Password"
              name="conformPassword"
              required
              ref={conPassword}
              id=""
            />
            {err === "1" ? (
              <p className=" text-red-900 ">Passwords do not match</p>
            ) : (
              ""
            )}

            <button
              type="submit"
              className=" relative w-full  mt-4 rounded-sm px-5 py-2 text-slate-800 dark:text-slate-300 dark:bg-emerald-500 bg-emerald-700"
            >
              Register
            </button>

            {data?.error ? (
              <p className="relative w-full text-center mt-4 rounded-sm px-5 py-2 text-slate-800 dark:text-slate-300 dark:bg-red-500 bg-red-700">
                {data.error}
              </p>
            ) : (
              ""
            )}
            {data?.massage ? (
              <p className="relative w-full text-center mt-4 rounded-sm px-5 py-2 text-slate-800 dark:text-slate-300 dark:bg-emerald-500 bg-emerald-700">
                {data.massage}
              </p>
            ) : (
              ""
            )}
            <p
              onClick={() => {
                setIsLog(!isLog);
              }}
              className="relative w-full text-center mt-4 rounded-sm px-5 py-2 border  cursor-pointer text-slate-800 dark:text-slate-300 dark:outline-emerald-500 outline-emerald-700"
            >
              To Log In
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
