import Header from '@/components/layout/Header'
import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps} from "@/interfaces";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts: posts.slice(0, 10), // return first 10 posts
    },
  };
};

interface PostsPageProps {
  posts: PostProps[];
}

  const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <section>
      <Header/>
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
    </section>

  )
}

export default Posts;