import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import React from "react";



function App() {
  const weatherTemp = "75°F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <footer className="footer">
        <div>
          Developed By Phillippe Louis
        </div>
        <div>
          2023
        </div>
      </footer>
    </div>
  );
}

export default App;
