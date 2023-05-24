"use client";
import TextEditor from "@/components/PostUpload/TextEditor";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../public/please.webp";
import moment from "moment/moment";
export default function page() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [Upload, setUpload] = useState(false);
  const [uploadedImg, setUploadedImg] = useState(null);

  const handleUpload = async (childData) => {
    setUpload(childData);
  };
  // Function to handle data received from the child component
  const handleData = async (childData) => {
    setData(childData);
  };

  const upload = async () => {
    try {
      const currentDateAndTime = moment().format("YYYY-MM-DD HH:mm:ss");
      const res = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          cover: uploadedImg,
          post: data,
          date: currentDateAndTime,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      });
      if (res.ok) {
        const resData = await res.json();

        console.log(resData);
      } else {
        console.log("eeee");
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (Upload) {
    upload();
  }
  console.log(data);

  const handelFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // Update the component's state with the image data
      setUploadedImg(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" pt-14">
      <div className="flex justify-between max-w-lg m-auto">
        <div className="">Title</div>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name="title"
          id=""
        />
      </div>
      <div className="flex justify-between max-w-lg m-auto">
        <div className="">Cover Image</div>
        <input type="file" onChange={handelFile} name="cover" id="" />
      </div>
      <div className=" relative m-auto max-w-xs h-44">
        {uploadedImg ? (
          <Image
            src={uploadedImg}
            fill
            style={{ objectFit: "cover" }}
            priority
            alt=""
          />
        ) : (
          <Image
            src={img}
            fill
            style={{ objectFit: "cover" }}
            priority
            alt=""
          />
        )}
      </div>
      <TextEditor Data={handleData} upload={handleUpload} />
    </div>
  );
}
