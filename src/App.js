import picture from "./images/sport-canada.png";
import "./App.css";

import Description from "./Description";
import Header from "./Header";
import { useState } from "react";

function App() {
  let [title, setTitle] = useState("Canadian sports");
  return (
    <div className="App">
      <header className="App-header">
        <Header title={title} />
        <img src={picture} className="App-logo" alt="sports in Canada" />
        <Description />
        <div className="buttons">
          <button onClick={(e) => setTitle(e.target.innerHTML)}>
            Ice Hockey
          </button>
          <button onClick={(e) => setTitle(e.target.innerHTML)}>
            Basketball
          </button>
          <button onClick={(e) => setTitle(e.target.innerHTML)}>Soccer</button>
        </div>
      </header>
    </div>
  );
}

export default App;
