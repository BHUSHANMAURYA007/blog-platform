"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // ✅ AI GENERATE FUNCTION
  const generateAI = async () => {
 const res = await fetch("/api/summarize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: title }),
  });

  const data = await res.json();
  setBody(data.summary);
};

  // ✅ SAVE POST
  const handleCreate = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  
  const { error } = await supabase.from("posts").insert([
    { 
      title, 
      body,
      author_id: session.user.id  // add this!
    },
  ]);

  if (error) {
    alert(error.message);
  } else {
    alert("Post created ✅");
    setTitle("");
    setBody("");
  }
};

  return (
    <div>
      <h1>Create Post</h1>

      <input
        placeholder="Title (topic for AI)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* ✅ AI BUTTON */}
      <button onClick={generateAI}>
        Generate with AI ✨
      </button>

      <textarea
        placeholder="Body (AI will fill this)"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleCreate}>
        Create
      </button>
    </div>
  );
}