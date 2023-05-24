import React from "react";
import PostTypeOne from "./post-type/postTypeOne";
import PostTypeTwo from "./post-type/postTypeTwo";
import PostTypeThree from "./post-type/postTypeThree";

export default function PostList() {
  return (
    <div className=" container m-auto">
      <p className=" text-center">last post</p>
      <PostTypeOne />
      <PostTypeOne />
      <PostTypeOne />
      <div className="flex px-4 justify-between flex-wrap  max-w-5xl m-auto">
        <PostTypeTwo />
        <PostTypeTwo />
        <PostTypeTwo />
        <PostTypeTwo />
      </div>
      <div className="flex px-4 justify-between flex-wrap  max-w-5xl m-auto">
        <PostTypeThree />
        <PostTypeThree />
        <PostTypeThree />
        <PostTypeThree />
      </div>
    </div>
  );
}
