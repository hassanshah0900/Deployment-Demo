import logo from "./assets/logo.svg";
import denimous from "./assets/Denimous.svg";
import "./App.css";

function App() {
  return (
    <main>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <img
            style={{ width: "20%", borderRadius: "100%" }}
            src={logo}
            alt=""
          />
          <img style={{ width: "30%" }} src={denimous} alt="" />
        </div>
        <span
          style={{
            marginTop: "30px",
            width: "60%",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          The Site is Under Construction for a long time.
        </span>
      </div>
    </main>
  );
}

export default App;
