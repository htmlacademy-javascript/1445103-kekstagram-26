// Функция проверки длины введённого комментария

const checkLength = function (line, maxLength) {
  if (line.length <= maxLength) {
    return true;
  }
};

checkLength ('Hello', 15);

//Функция, возвращающая случайное целое число из переданного диапазона

const getRandomDiceNumber = function (min, max) {
  if (min >= 0 || max >= 0) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } else {
    return false;
  }
};

getRandomDiceNumber (7, 12);
