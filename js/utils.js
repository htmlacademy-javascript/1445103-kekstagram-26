export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const NAMES = [
  'Вася',
  'Masha',
  'Anton',
  'Tom',
  'Kirill',
  'Anna',
];

export const AVATAR_NUMBER_START = 1;
export const AVATAR_NUMBER_END = 6;


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
