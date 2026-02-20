import Button from "./Buttun";

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

  return (
    <div style={sideMenuStyle}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button>Button 6</Button>
      <Button>Button 7</Button>
      <Button>Button 8</Button>
      <Button>Button 9</Button>
    </div>
  );
}
