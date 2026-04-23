import Link from "next/link";

export default function Home() {
  return (
    <div style={container}>
      <h1 style={{ color: "#333" }}>Welcome to Blog Platform 🚀</h1>

      <div style={{ marginTop: "20px" }}>
        <Link href="/login">
          <button style={btnStyle}>Login</button>
        </Link>

        <Link href="/signup">
          <button style={btnStyle}>Signup</button>
        </Link>
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
  backgroundColor: "#f0f4f8"
} as const;

const btnStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};