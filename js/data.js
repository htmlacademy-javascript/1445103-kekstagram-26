import { getRandomDiceNumber, choose, getCommentNumberMargin } from './utils';
import * as consts from './utils';

export function generateComment(i) {
  return {
    id: i, //Unique
    avatar: `img/avatar-${getRandomDiceNumber (consts.AVATAR_NUMBER_START, consts.AVATAR_NUMBER_END)}.svg`,
    message: choose(consts.MESSAGES),
    name: choose(consts.NAMES),
  };
}

export function generateCommentArray(k, l) {
  const commentArray = [];
  for (let i = k; i < l; i++) {
    commentArray.push(generateComment(i));
  }
  return commentArray;
}

export function generatePost(i) {
  const commentsNumber = 5;
  const likesNumberMin = 15;
  const likesNumberMax = 200;
  return {
    id: i, //Unique
    url: `photos/${i}.jpg`, //Unique
    description: 'Hello, bear!',
    likes: getRandomDiceNumber (likesNumberMin, likesNumberMax),
    comments: generateCommentArray(getCommentNumberMargin(i), getCommentNumberMargin(i) + commentsNumber),
    avatar: `img/avatar-${getRandomDiceNumber (consts.AVATAR_NUMBER_START, consts.AVATAR_NUMBER_END)}.svg`,
    message: choose(consts.MESSAGES),
    name: choose(consts.NAMES),
  };
}

export function generatePostArray() {
  const objectArray = [];
  for (let i = 0; i < 25; i++) {
    objectArray.push(generatePost(i + 1));
  }

  return objectArray;
}

