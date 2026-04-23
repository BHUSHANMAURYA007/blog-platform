

"use client";
import { useRouter } from "next/navigation";

const router = useRouter();

const handleSignup = async () => {
  try {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Signup successful ✅");

    // redirect to login
    router.push("/login");

  } catch (err) {
    console.log(err);
    alert("Network error ❌");
  }
};