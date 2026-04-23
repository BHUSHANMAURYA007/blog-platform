"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  import { useRouter } from "next/navigation";

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

    // ✅ redirect after login
    router.push("/dashboard");
  }
};
 return (
  <div style={container}>
    <h1>Login</h1>

    <input style={input} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    <input style={input} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

    <button style={btn} onClick={handleLogin}>Login</button>
  </div>
  
);
const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f9fafb"
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
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "5px"
};
<button onClick={handleLogout} style={btn}>
  Logout
</button>
}