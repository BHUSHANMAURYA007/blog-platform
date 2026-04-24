"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login successful ✅");
      router.push("/dashboard");
    }
  };

  return (
    <div style={container}>
      <div style={formBox}>
        <h1>Login</h1>

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

        <button style={btn} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

/* ✅ ADD THESE BELOW (THIS IS WHAT YOU MISSED) */

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#0f172a",
};

const formBox = {
  backgroundColor: "#1e293b",
  padding: "30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const input = {
  padding: "10px",
  margin: "10px",
  width: "250px",
};

const btn = {
  padding: "10px",
  backgroundColor: "#22c55e",
  color: "white",
  border: "none",
};