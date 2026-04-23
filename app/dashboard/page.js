"use client";

import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();

  // 🔒 protect page (optional but important)
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      }
    };

    checkUser();
  }, []);

  // 🔴 logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert("Logged out ✅");
    router.push("/");
  };

  return (
    <div style={container}>
      <h1>Dashboard</h1>

      <button style={btnBlue} onClick={() => router.push("/create-post")}>
        Create Post
      </button>

      <button style={btnGreen} onClick={() => router.push("/posts")}>
        Read Posts
      </button>

      <button style={btnRed} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

// 🎨 styles
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f5f7fa"
};

const btnBlue = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

const btnGreen = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

const btnRed = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "red",
  color: "white",
  border: "none",
  borderRadius: "5px"
};