"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup successful ✅");
      router.push("/login");
    }
  };

 return (
  <div style={container}>
    <div style={formBox}>
      <h1 style={{ marginBottom: "20px" }}>Signup</h1>

      <input
        style={input}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={btn} onClick={handleSignup}>
        Signup
      </button>
    </div>
  </div>
);
}

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
  backgroundColor: "#3b82f6", // blue button
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"

};