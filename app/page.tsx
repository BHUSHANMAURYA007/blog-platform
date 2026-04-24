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
  minHeight: "100vh",
  margin: 0,
  backgroundColor: "#000000",
  display: "flex",
  flexDirection: "column",
};