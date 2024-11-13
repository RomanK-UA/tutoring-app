import { useEffect, useRef, useState } from "react";
import { getRandomNumberInRange } from "../utils/getRandomNumberInRange";
import { getRandomLetter } from "../utils/getRandomLetter";
import Keyboard from "../components/Keyboard";
import GameContainer from "../components/GameContainer";

const PressCorrectLetter: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [num, setNum] = useState(getRandomNumberInRange(1, 5));
  const [letter, setLetter] = useState(getRandomLetter());
  const [feedback, setFeedback] = useState("");
  const [flashColor, setFlashColor] = useState<string>("");

  const imageSrc = `/holding-number-${num}.png`;

  useEffect(() => {
    if (flashColor) {
      const timer = setTimeout(() => setFlashColor(""), 300);
      return () => clearTimeout(timer);
    }
  }, [flashColor]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toLocaleUpperCase());
  };

  const resetGameRound = () => {
    setNum(getRandomNumberInRange(1, 5));
    setLetter(getRandomLetter());
    setInputValue("");
  };

  const checkAnswer = () => {
    const expectedAnswer = letter.repeat(num);
    const isCorrect = inputValue === expectedAnswer;

    if (isCorrect) {
      setFeedback("Правильно!");
      setFlashColor("bg-green-500");
      resetGameRound();
    } else {
      setFlashColor("bg-red-500");
    }
  };

  const handleKeyPress = (key: string) => {
    setInputValue((prev) => prev + key);
  };

  return (
    <GameContainer flashColor={flashColor}>
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt="THERE IS IMG"
          className="w-52 h-52 object-contain"
        />
        <h1 className="text-6xl text-blue-900 font-bold">
          Нажми букву{" "}
          <span className="text-green-900 text-8xl mr-3">{letter}</span>
        </h1>
      </div>

      <input
        value={inputValue}
        ref={inputRef}
        type="text"
        style={{
          opacity: 0.5,
        }}
        aria-hidden="true"
        onChange={handleChange}
        className="h-30 font-bold text-9xl w-1/2 tracking-wider uppercase"
      />

      <button
        className="h-20 w-60 rounded-3xl border-2 border-white text-white text-3xl transition-all duration-300 hover:bg-sky-300"
        onClick={checkAnswer}
      >
        Проверить
      </button>
      <h2>{feedback}</h2>
      <Keyboard onKeyPress={handleKeyPress} />
    </GameContainer>
  );
};

export default PressCorrectLetter;
