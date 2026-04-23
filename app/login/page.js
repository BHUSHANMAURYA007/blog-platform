"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation"; // ✅ here

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // ✅ inside function

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful ✅");
      router.push("/dashboard"); // redirect
    }
  };

  return (
  <div style={container}>
    <div style={formBox}>
      <h1 style={{ marginBottom: "20px" }}>Login</h1>

      <input
        style={input}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        style={input}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      <button style={btn} onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
); 
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#0f172a" // dark background
};

const formBox = {
  backgroundColor: "#1e293b",
  padding: "30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 0 15px rgba(0,0,0,0.3)"
};

const input = {
  padding: "10px",
  margin: "10px",
  width: "250px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const btn = {
  padding: "10px 20px",
  marginTop: "10px",
  backgroundColor: "#22c55e", // ✅ green button
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

}