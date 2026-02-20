export default function Button({children}) {
  const buttonStyle = {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    width: "70%",
    border: "4px solid rgb(163, 49, 49)",
    alignSelf: "center",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "0.3s",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#cc0000";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#ff4d4d";
    // alert("Button clicked!");
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
