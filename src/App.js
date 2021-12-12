import picture from "./images/sport-canada.png";
import "./App.css";

import Description from "./Description";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Canadian sports</h1>
        <img src={picture} className="App-logo" alt="sports in Canada" />
        <Description />
        <div className="buttons">
          <button onClick={(e) => alert(e.target.innerHTML+" clicked!")}>Ice Hockey</button>
          <button onClick={(e) => alert(e.target.innerHTML+" clicked!")}>Basketball</button>
          <button onClick={(e) => alert(e.target.innerHTML+" clicked!")}>Soccer</button>
        </div>
      </header>
    </div>
  );
}

export default App;
