"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter, useParams } from "next/navigation";

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.log("Error:", error);
    } else {
      setPost(data);
      setTitle(data.title);
      setContent(data.body);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (!confirm) return;

    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      alert("Post deleted!");
      router.push("/posts");
    }
  };

  const handleEdit = async () => {
    const { error } = await supabase
      .from("posts")
      .update({
        title: title,
        body: content,
      })
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      alert("Post updated!");
      setEditing(false);
      fetchPost();
    }
  };

  if (!post) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <button
        onClick={() => router.push("/posts")}
        style={{ marginBottom: "1rem", padding: "0.5rem 1rem" }}
      >
        ← Back to Posts
      </button>

      {editing ? (
        // Edit Mode
        <div>
          <h1>Edit Post</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            style={{ display: "block", width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
          />
          <button
            onClick={handleEdit}
            style={{ padding: "0.5rem 1rem", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "1rem" }}
          >
            Save Changes
          </button>
          <button
            onClick={() => setEditing(false)}
            style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
          >
            Cancel
          </button>
        </div>
      ) : (
        // View Mode
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1>{post.title}</h1>
            <div>
              <button
                onClick={() => setEditing(true)}
                style={{ padding: "0.5rem 1rem", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "0.5rem" }}
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                style={{ padding: "0.5rem 1rem", backgroundColor: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          </div>
          <small style={{ color: "#888" }}>
            {post.created_at ? new Date(post.created_at).toLocaleDateString() : ""}
          </small>
          <p style={{ marginTop: "1rem", lineHeight: "1.8" }}>{post.body}</p>
        </div>
      )}
    </div>
  );
}