"use client"
import React, { useState } from "react"

const TextInput = () => {
  const [userInput, setUserInput] = useState(''); 
  const inputPlaceholder = "Enter your sentence here..."

  return (
    <div className="textInput">
      <input 
      type="text" 
      placeholder={inputPlaceholder}
      value={userInput} 
      onChange={(e) => setUserInput(e.target.value)}
      /> 
      <button>Submit</button>
    </div>
  );
};

export default TextInput;
