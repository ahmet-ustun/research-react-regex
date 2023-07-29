import "./App.css";
import Input from "./Input/Input.js";

function App() {
  return (
    <div className="App">
      <Input label={"Try adding some text below:"} text={""} disabled={false} />

      <Input label={"Testing #1: Just whitespace"} text={" "} disabled={true} />
      <Input label={"Testing #2: With long text"} text={"thisisalongtext"} disabled={true} />
      <Input label={"Testing #3: Given length"} text={"12345678"} disabled={true} />
      <Input label={"Testing #4: With uppercase"} text={"Ahmet"} disabled={true} />
      <Input label={"Testing #5: With lowercase"} text={"ahmet"} disabled={true} />
      <Input label={"Testing #6: With characters"} text={"@#me?"} disabled={true} />
      <Input label={"Testing #7: With one digit"} text={"8"} disabled={true} />
      <Input label={"Testing #8: With whitespace"} text={"Ahmet Ustun"} disabled={true} />
      <Input label={"Testing #9: With newline"} text={"Ahmet\nUstun"} disabled={true} />
      <Input label={"Testing #10: Just newline"} text={"\n"} disabled={true} />
    </div>
  );
}

export default App;
