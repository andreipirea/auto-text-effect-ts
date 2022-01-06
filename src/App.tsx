import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("Welcome to JS programming!");
  const [inputValue, setInputValue] = useState<string>("1");

  useEffect(() => {
    const speedEl: any = document.getElementById("speed")!;

    let index = 1;
    let speed = 300 / +inputValue;

    writeText();

    function writeText() {
      setText(text.slice(0, index));

      index++;

      if (index > text.length) {
        index = 1;
      }

      setTimeout(writeText, speed);
    }

    speedEl.addEventListener(
      "input",
      (e: any) => (speed = 300 / e.target.value)
    );
  }, []);

  return (
    <div className="App">
      <h1 id="text">{text}</h1>

      <div className="input-container">
        <label htmlFor="speed">Speed:</label>
        <input
          type="number"
          name="speed"
          id="speed"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          min="1"
          max="5"
        />
      </div>
    </div>
  );
}

export default App;
