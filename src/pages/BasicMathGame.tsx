import { useState } from "react";
import GameContainer from "../components/GameContainer";
import Keyboard from "../components/Keyboard";
import { createMathEquation } from "../utils/createMathEquation";

const BasicMathGame = () => {
  const [inputValue, setInputValue] = useState("");
  const [flashColor, setFlashColor] = useState<string>("");
  const [equation, setEquation] = useState(createMathEquation(1, 7));
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
  const checkAnswer = (equation) => {
    if (inputValue == equation.result) {
      setFlashColor("bg-green-500");
    } else {
      setFlashColor("bg-red-500");
    }
  };
  return (
    <GameContainer flashColor={flashColor}>
      <section className="w-full border-2 border-red-400 text-6xl text-blue-900 font-bold ">
        <h1>Пример:</h1>
        <span>{equation.equation}</span>
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
      <button
        className="h-20 w-60 rounded-3xl border-2 border-white text-white text-3xl transition-all duration-300 hover:bg-sky-300"
        onClick={checkAnswer}
      >
        Проверить
      </button>
    </GameContainer>
  );
};

export default BasicMathGame;
