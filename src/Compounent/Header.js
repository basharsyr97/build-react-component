export default function Header() {
  const headerStyle = {
    backgroundColor: "#4fb68b",
    position: "fixed",
    top: 0,
    left:0,
    width: "100%",
    color: "#fff",
    textAlign: "center",
    padding : "50px",
    ShadowRoot: "40px rgba(158, 76, 76, 0.75)",
    zIndex: 1000,
  };

  return (
    <div style={headerStyle}>
      <h1>Bashar Ite</h1>
    </div>
  );
}
