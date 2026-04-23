export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      flexDirection: "column",
      backgroundColor: "#f0f4f8"
    }}>
      <h1 style={{ color: "#333" }}>Welcome to Blog Platform 🚀</h1>

      <div style={{ marginTop: "20px" }}>
        <a href="/login">
          <button style={btnStyle}>Login</button>
        </a>

        <a href="/signup">
          <button style={btnStyle}>Signup</button>
        </a>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  margin: "10px",
  backgroundColor: "#0070f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};