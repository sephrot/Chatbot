import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [texts, setTexts] = useState<string[]>([]);
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setTexts([...texts, inputValue]);
            setInputValue("");
          }
        }}
      />
      <br></br>
      <button
        type="button"
        onClick={() => {
          setTexts([...texts, inputValue]);
          setInputValue("");
        }}
      >
        Send
      </button>

      <div>
        {texts.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
