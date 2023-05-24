import PostLayout from "@/components/Post/PostLayout";
import React from "react";

function page() {
  const details = {
    title: "dsdsds",
    auth: "ds dsd",
    post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti nesciunt molestiae animi rerum maiores voluptas. Nesciunt dignissimos culpa soluta tempora perspiciatis quibusdam, qui reiciendis officia, perferendis itaque eaque vero",
  };
  return (
    <div className=" m-auto pt-[56px] dark:bg-gray-700 bg-[#ffff]">
      <PostLayout details={details} />
    </div>
  );
}

export default page;
