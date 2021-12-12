import picture from "./images/sport-canada.png";
import "./App.css";

import Description from "./Description";
import Header from "./Header";
import { useState } from "react";

function App() {
  let [btnText, setBtnText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Canadian sports" />
        <img src={picture} className="App-logo" alt="sports in Canada" />
        <Description />
        <div className="buttons">
          <button onClick={(e) => setBtnText(e.target.innerHTML)}>
            Ice Hockey
          </button>
          <button onClick={(e) => setBtnText(e.target.innerHTML)}>
            Basketball
          </button>
          <button onClick={(e) => setBtnText(e.target.innerHTML)}>
            Soccer
          </button>
        </div>

        <div className="btn-text">
          <h2>Favourite Sports</h2>
          <h3>{btnText}</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
