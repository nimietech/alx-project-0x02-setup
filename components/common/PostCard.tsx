import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId,author }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <span className="text-sm text-gray-500">Posted by User: {userId}</span>
      <p>Created by: {author}</p>
    </div>
  );
};

export default PostCard;
