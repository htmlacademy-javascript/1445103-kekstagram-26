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

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Вася',
  'Masha',
  'Anton',
  'Tom',
  'Kirill',
  'Anna',
];

const AVATAR_NUMBER_START = 1;
const AVATAR_NUMBER_END = 6;

const getCommentNumberMargin = (i) => (i - 1) * 5;

function choose(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function generateObject(i) {
  const commentsNumber = 5;
  const likesNumberMin = 15;
  const likesNumberMax = 200;
  return {
    id: i, //Unique
    url: `photos/${i}.jpg`, //Unique
    description: 'Hello, bear!',
    likes: getRandomDiceNumber (likesNumberMin, likesNumberMax),
    comments: generateCommentArray(getCommentNumberMargin(i), getCommentNumberMargin(i) + commentsNumber),
    avatar: `img/avatar-${getRandomDiceNumber (AVATAR_NUMBER_START, AVATAR_NUMBER_END)}.svg`,
    message: choose(MESSAGES),
    name: choose(NAMES),
  };
}

function generateComment(i) {
  return {
    id: i, //Unique
    avatar: `img/avatar-${getRandomDiceNumber (AVATAR_NUMBER_START, AVATAR_NUMBER_END)}.svg`,
    message: choose(MESSAGES),
    name: choose(NAMES),
  };
}

function generateCommentArray(k, l) {
  const commentArray = [];
  for (let i = k; i < l; i++) {
    commentArray.push(generateComment(i));
  }
  return commentArray;
}

function generateObjectArray() {
  const objectArray = [];
  for (let i = 0; i < 25; i++) {
    objectArray.push(generateObject(i + 1));
  }

  return objectArray;
}

generateObjectArray();
