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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
type KeyboardProps = {
  onKeyPress: (key: string) => void;
  variant: string;
};
const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, variant }) => {
  const keyboardData: Record<string, string[] | number[]> = {
    alphabet: russianAlphabet,
    numbers,
  };
  const keys = keyboardData[variant] || [];

  return (
    <div className="grid grid-cols-12 gap-2 w-full text-blue-700 font-bold">
      {keys.map((key, index) => (
        <button
          key={index}
          className="p-2 text-lg text-center border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          onClick={() => onKeyPress(key.toString())} // Ensure numbers are converted to strings
        >
          {key}
        </button>
      ))}
      <button
        className="p-2 border border-gray-300 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center text-xl"
        onClick={() => onKeyPress("delete")} // Example action for delete
      >
        <FaDeleteLeft />
      </button>
    </div>
  );
};

export default Keyboard;
