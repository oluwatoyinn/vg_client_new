import React from "react";
import Data from "../utils/Data";

const Blog = () => {
  return (
    <div className="container mx-auto">
      {Data.blogData.map((item) => {
        return <div className="flex gap-5 dark:text-gray-500">{item.message}</div>;
      })}
    </div>
  );
};

export default Blog;
