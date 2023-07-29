import React, { useState } from "react";

const regexFunction = (string, length) => {
  const hasSpace = /\s/g;

  if (string.length > length || hasSpace.test(string)) {
    return false;
  }

  const pattern = /[a-zA-Z0-9`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]+/g;

  return pattern.test(string);
};

const Input = ({ label, text, disabled }) => {
  const [textInput, setTextInput] = useState(text);

  const onChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <div
      style={{
        margin: 24,
        padding: 24,
        border: "2px solid black",
        borderRadius: 6,
      }}
    >
      <p style={{ color: "red" }}>{label}</p>
      <textarea
        type="text"
        value={textInput}
        onChange={onChange}
        disabled={disabled}
      />
      <p>{textInput}</p>
      {textInput !== "" && (
        <p>{regexFunction(textInput, 8) ? "Valid" : "Invalid"}</p>
      )}
    </div>
  );
};

export default Input;
