import picture from "./images/sport-canada.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Canadian sports</h1>
        <img src={picture} className="App-logo" alt="sports in Canada" />
        <p>
          Canada has a wide variety of games. It ranges from summer to winter
          sports. The most common sports are ice hockey, lacrosse, soccer,
          basketball, and ice hockey.
        </p>
      </header>
    </div>
  );
}

export default App;
