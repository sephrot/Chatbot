import { useState } from "react";
interface Message {
  id: number;
  text: string;
  person: string;
}
function App() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [nextId, setNextId] = useState(1);
  const addMessage = (text: string, person: string) => {
    setMessages([...messages, { id: nextId, text, person }]);
    setNextId(nextId + 1);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br></br>
      <button
        type="button"
        onClick={() => {
          addMessage(inputValue, "user");
          setInputValue("");
        }}
      >
        Send
      </button>

      <div>
        {messages.map((message, i) => (
          <p key={i}>
            {message.person}: says "{message.text}"
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
