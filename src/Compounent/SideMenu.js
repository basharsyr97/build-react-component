export default function SideMenu() {
  const sideMenuStyle = {
    // position: "fixed",
    // zIndex: 1,
    // top: "220px",
    // right: 0,
    // width: "220px",
    // height: "calc(100vh - 220px)",
    overflowY: "auto",
    border: "3px  solid #3d8f6d",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    backgroundColor: "#f9f9f9",
  };

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
    <div style={sideMenuStyle}>
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 1
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 2
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>{" "}
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Button 3
      </button>
    </div>
  );
}
