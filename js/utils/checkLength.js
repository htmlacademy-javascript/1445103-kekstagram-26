// Функция проверки длины введённого комментария

export const checkLength = (line, maxLength) => {
  if (line.length <= maxLength) {
    return true;
  }
  return false;
};
