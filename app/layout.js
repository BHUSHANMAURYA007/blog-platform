export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: "#000" }}>
      <body style={container}>
        {children}
      </body>
    </html>
  );
}

const container = {
  margin: 0,
  minHeight: "100vh",
  backgroundColor: "#0f172a",
  color: "white",
};