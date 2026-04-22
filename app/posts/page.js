"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
  const { data, error } = await supabase
  .from("posts")
  .select("*");
  console.log("POSTS:", data);
  console.log("ERROR:", error);

  if (error) {
    console.log("Error:", error);
  } else {
    setPosts(data);
  }
};

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <h1>All Posts</h1>
        <button
          onClick={() => router.push("/posts/create")}
          style={{ padding: "0.5rem 1rem" }}
        >
          + Create Post
        </button>
      </div>

      {posts.length === 0 ? (
        <p>No posts yet. Create your first post!</p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
            onClick={() => router.push(`/posts/${post.id}`)}
          >
            <h2>{post.title}</h2>
            <p>{post.body?.substring(0, 100)}...</p>
            <small style={{ color: "#888" }}>
              {new Date(post.created_at).toLocaleDateString()}
            </small>
          </div>
        ))
      )}
    </div>
  );
}