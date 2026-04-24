export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={container}>
        {children}
      </body>
    </html>
  );
}

const container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#0f172a"  // dark blue-black (more modern UI)
};