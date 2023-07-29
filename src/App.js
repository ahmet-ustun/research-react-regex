import { useState } from "react";
import "./App.css";

const regexFunction = (string, length) => {
  const hasSpace = /\s/g;

  if (string.length > length || hasSpace.test(string)) {
    return false;
  }

  const pattern = /[a-zA-Z0-9`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+/g;

  return pattern.test(string);
};

function App() {
  const [text, setText] = useState();

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={text} onChange={onChange} />
      <p>{text}</p>
      {text && <p>{regexFunction(text, 8) ? "Valid" : "Invalid"}</p>}
    </div>
  );
}

export default App;
