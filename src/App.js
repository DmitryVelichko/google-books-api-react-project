import React from "react";
import "./App.css";

function App() {
  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        <div className="filter">AAA</div>
      </div>
    );
  }
  return <div>{mainHeader()}</div>;
}
export default App;
