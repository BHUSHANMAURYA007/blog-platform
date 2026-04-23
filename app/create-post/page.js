"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreate = async () => {
    try {
      const { error } = await supabase.from("posts").insert([
        {
          title,
          body,
        },
      ]);

      if (error) {
        alert(error.message);
        return;
      }

      alert("Post created ✅");
    } catch (err) {
      console.log(err);
      alert("Network error ❌");
    }
  };

  return (
    <div>
      <h1>Create Post</h1>

      <input
        type="text"
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter content"
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleCreate}>
        Create Post
      </button>
    </div>
  );
}