"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ 
      padding: "2rem", 
      maxWidth: "800px", 
      margin: "0 auto", 
      textAlign: "center" 
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝 Blog Platform</h1>
      <p style={{ fontSize: "1.2rem", color: "#888", marginBottom: "2rem" }}>
        Read and share amazing stories
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={() => router.push("/login")}
          style={{ padding: "0.8rem 2rem", backgroundColor: "black", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem" }}
        >
          Login
        </button>
        <button
      
          onClick={() => router.push("/signup")}
          style={{ padding: "0.8rem 2rem", backgroundColor: "purple", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem" }}
        >
          Sign Up
        </button>
        <button
          onClick={() => router.push("/posts")}
          style={{ padding: "0.8rem 2rem", backgroundColor: "#22c55e", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "1rem" }}
        >
          Read Posts
        </button>
      </div>
    </div>
  );
}