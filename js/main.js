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

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Вася',
  'Masha',
  'Anton',
  'Tom',
  'Kirill',
  'Anna',
];

function choose(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function generateObject(i) {
  return {
    id: i, //Unique
    url: `photos/${i}.jpg`, //Unique
    description: 'Hello, bear!',
    likes: getRandomDiceNumber (15, 200),
    comments: generateCommentArray((i - 1) * 5, (i - 1) * 5 + 5),
    avatar: `img/avatar-${getRandomDiceNumber (1, 6)}.svg`,
    message: choose(messages),
    name: choose(names),
  };
}

function generateComment(i) {
  return {
    id: i, //Unique
    avatar: `img/avatar-${getRandomDiceNumber (1, 6)}.svg`,
    message: choose(messages),
    name: choose(names),
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
  for (let i = 1; i < 26; i++) {
    objectArray.push(generateObject(i));
  }

  return objectArray;
}

generateObjectArray();
