import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{content}</p>
      <small>User ID: {userId}</small>
      <hr />
    </div>
  );
};

export default PostCard;
