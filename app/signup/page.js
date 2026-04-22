"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSignup = async () => {
  console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log("KEY:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) alert(error.message);
    else alert("Signup success!");

  } catch (err) {
    console.log("FETCH ERROR:", err);
    alert("Connection failed: " + err.message);
  }
};
  return (
    <div className="p-5">
      <h1>Signup</h1>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border m-2 p-2"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border m-2 p-2"
      />
      <button onClick={handleSignup} className="bg-blue-500 text-white p-2">
        Signup
      </button>
    </div>
  );
}