
// Функция проверки длины введённого комментария

export const checkLength = (line, maxLength) => {
  if (line.length <= maxLength) {
    return true;
  }
  return false;
};

export function choose(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export const getCommentNumberMargin = (i) => (i - 1) * 5;


//Функция, возвращающая случайное целое число из переданного диапазона

export const getRandomDiceNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
