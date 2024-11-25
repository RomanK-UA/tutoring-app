import { useState } from "react";
import GameContainer from "../components/GameContainer";
import Keyboard from "../components/Keyboard";

const BasicMathGame = () => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyPress = (key: string) => {
    if (key === "delete") {
      if (inputValue.length >= 1) {
        // Remove the last character
        setInputValue((prev) => prev.slice(0, -1));
      }
    } else if (inputValue.length < 2) {
      // Add the key to the input value
      setInputValue((prev) => prev + key);
    }
  };
  return (
    <GameContainer>
      <section className="w-full border-2 border-red-400 text-6xl text-blue-900 font-bold ">
        <h1>Пример:</h1>
        <span>1</span>
        <span>=</span>
        <input
          type="text"
          value={inputValue}
          className={`w-24 bg-cyan-300 border-b-2 border-red-300 outline-none text-orange-500 text-center ${
            inputValue.length === 1 ? "text-center" : "text-left"
          }`}
          style={{
            width: `${inputValue.length === 2 ? "3ch" : "2ch"}`, // Dynamically adjust width
          }}
        />
      </section>
      <Keyboard onKeyPress={handleKeyPress} variant="numbers"></Keyboard>
    </GameContainer>
  );
};

export default BasicMathGame;
