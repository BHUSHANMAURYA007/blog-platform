import { ReactNode, CSSProperties } from "react";

export default function Home() {
  return (
    <div style={{ color: "white", textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to Blog Platform 🚀</h1>
      <p>Go to login or create post</p>
    </div>
  );
}

const container: CSSProperties = {
  minHeight: "100vh",
  margin: 0,
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
};