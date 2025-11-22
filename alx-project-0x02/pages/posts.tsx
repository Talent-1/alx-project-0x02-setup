import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // Transform API response to match PostProps
      const formatted: PostProps[] = data.map((post: any) => ({
        userId: post.userId,
        title: post.title,
        content: post.body, // "body" → "content"
      }));

      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <div>
        <Header />
      <h1>Posts List</h1>

      {posts.map((post, index) => (
        <PostCard
          key={index}
          userId={post.userId}
          title={post.title}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default PostsPage;
