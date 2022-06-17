// Функция проверки длины введённого комментария

const checkLength = (line, maxLength) => {
  if (line.length <= maxLength) {
    return true;
  }

  return false;
};

checkLength ('Hello', 15);

//Функция, возвращающая случайное целое число из переданного диапазона

const getRandomDiceNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomDiceNumber (7, 12);


//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//https://www.w3schools.com/js/js_random.asp
