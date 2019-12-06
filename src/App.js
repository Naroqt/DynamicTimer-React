import React from "react";
import "./App.css";
import Timer from "./components/Timer.jsx";

function App() {
  return (
    <div>
      <Timer time={3600} />
    </div>
  );
}

export default App;
