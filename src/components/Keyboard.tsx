import { FaDeleteLeft } from "react-icons/fa6";
const russianAlphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
];
type KeyboardProps = {
  onKeyPress: (key: string) => void;
};
const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress }) => {
  return (
    <div className="grid grid-cols-12 gap-2 w-full text-blue-700 font-bold">
      {russianAlphabet.map((letter, index) => (
        <button
          key={index}
          className="p-2 text-lg text-center border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          onClick={() => onKeyPress(letter)}
        >
          {letter}
        </button>
      ))}
      <button className="p-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center text-xl">
        <FaDeleteLeft />
      </button>
    </div>
  );
};

export default Keyboard;
