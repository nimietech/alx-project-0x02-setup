import Header from '@/components/layout/Header'
import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps} from "@/interfaces";

const posts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: PostProps[] = await res.json();
        setPosts(data.slice(0, 10)); // fetch first 10 posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="p-6">Loading posts...</p>;

  return (
       <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.userId}
          title={post.title}
          content={post.content}
          author={post.author}
          createdAt={post.createdAt}
          userId={post.userId}
        />
      ))}
    </div>

  )
}

export default posts