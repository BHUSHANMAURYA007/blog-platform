"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreate = async () => {
    const { error } = await supabase.from("posts").insert([
      { title, body },
    ]);

    if (error) {
      alert(error.message);
    } else {
      alert("Post created ✅");
    }
  };

  return (
    <div>
      <h1>Create Post</h1>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Body"
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}