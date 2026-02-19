import Header from "./Compounent/Header";
import SideMenu from "./Compounent/SideMenu";
import Content from "./Compounent/Content";
import "./App.css";

function App() {
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  const mainStyle = {
    display: "flex",
    flex: 3 ,
    backgroundColor: "#f0f0f0",
    gap: "70px",
    justifyContent: "space-between",
  };

  const headerWrapperStyle = {
    backgroundColor: "#4fb68b",
    zIndex: 1000,
    boxShadow: "0 4px 12px 12px rgba(130, 94, 94, 0.6)",
  };

  const sideMenuWrapperStyle = {
    backgroundColor: "#e0f7f4",
    flexShrink: 0,
    width: "240px",
    // height: "calc(100vh - 120px)",
    // marginTop: "120px",
    // overflowY: "auto",
  };

  const contentWrapperStyle = {
    flex: 1,
    flexGrow: 1,
    backgroundColor: "#ffffff",
    padding: "40px",
    overflowY: "auto",
  };

  return (
    <div style={appStyle}>
      <div style={headerWrapperStyle}>
        <Header />
      </div>
      <div style={mainStyle}>
        <div style={contentWrapperStyle}>
          <Content />
        </div>
        <div style={sideMenuWrapperStyle}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
