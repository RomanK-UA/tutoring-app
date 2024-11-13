export const getRandomLetter = (): string => {
    const letters = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }