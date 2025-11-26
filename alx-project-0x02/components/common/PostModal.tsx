"use client";

import { useState } from "react";
import { CardData } from "@/interfaces/index"; //

interface PostModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CardData) => void;
}

export default function PostModal({ open, onClose, onSubmit }: PostModalProps) {
  // Local form state for title and content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    // Construct a new CardData object
    const newPost: CardData = {
      id: crypto.randomUUID(), // generate unique ID
      name: "Anonymous", // you could pass in actual user name later
      title: title.trim(),
      content: content.trim(),
    };

    onSubmit(newPost);

    // Reset fields
    setTitle("");
    setContent("");

    onClose();
  };

  if (!open) return null; // nothing is shown if modal is closed

  return (
    // Dark overlay
    <div>
      {/* Modal card */}
      <div>
        <h2>Create a Post</h2>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* Title input */}
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Content input */}
          <div>
            <label>Content</label>
            <textarea
              placeholder="Write your content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
