"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("DATA:", data);
    console.log("SESSION AFTER LOGIN:", data?.session);
    console.log("ERROR:", error);

    if (error) {
      alert(error.message);
    } else {
      alert("Login success!");
      router.push("/posts/create");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
      <button
        onClick={handleLogin}
        style={{ padding: "0.5rem 1rem", width: "100%" }}
      >
        Login
      </button>
      <p style={{ marginTop: "1rem" }}>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}