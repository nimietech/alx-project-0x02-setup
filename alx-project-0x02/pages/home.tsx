import React from 'react'
import { useState } from "react";
import Card from '@/components/common/Card'
import { CardProps } from '@/interfaces'
import PostModal from "@/components/common/PostModal";
import Header from '@/components/layout/Header';


const home: React.FC = () =>  {

  const cards: CardProps[] = [
    {
      id: "1",
      name: "John Doe",
      title: "Frontend Developer",
      content: "I build modern web applications using React and Tailwind CSS."
    },
    {
      id: "2",
      name: "Jane Smith",
      title: "UI/UX Designer",
      content: "Passionate about creating user-centered designs that work beautifully."
    },
    {
      id: "3",
      name: "Mikey James",
      title: "Backend Developer",
      content: "Passionate about creating user-centered designs that work beautifully."
    }
  ];

  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);


  const handleAddPost = (data: CardProps) => {
    setPosts((prev) => [data, ...prev]);
  };

  return (
    <div>
      <main className="mx-auto max-w-2xl p-6">
        <Header/>
        <h1>WELCOME TO MODAL POST</h1>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        + New Post
      </button>

      {/* Modal */}
      <PostModal open={open} onClose={() => setOpen(false)} onSubmit={handleAddPost} />

      {/* Post list */}
      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg border p-4 shadow">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </main>
    </div>
  )
}

export default home