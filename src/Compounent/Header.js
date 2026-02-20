import MyInput from "./MyInput";

export default function Header() {
  const headerStyle = {
    backgroundColor: "#4fb68b",
    display: "block",
    justifyContent: "center",
    // position: "fixed",
    color: "#fff",
    textAlign: "center",
    padding: "50px",
    ShadowRoot: "40px rgba(140, 74, 74, 0.81)",
    zIndex: 1000,
  };

  return (
    <div style={headerStyle}>
      <h1>Bashar Ite</h1>
      <MyInput />
    </div>
  );
}
