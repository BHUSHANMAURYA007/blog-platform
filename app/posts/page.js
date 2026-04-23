"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("posts").select("*");

    if (!error) {
      setPosts(data);
    }
  };

  return (
    <div style={container}>
      <h1>All Posts</h1>

      {posts.map((post) => (
        <div key={post.id} style={card}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

// ✅ styles
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f5f7fa"
};

const card = {
  border: "1px solid #ddd",
  padding: "10px",
  margin: "10px",
  width: "300px",
  borderRadius: "5px",
  backgroundColor: "white"
};