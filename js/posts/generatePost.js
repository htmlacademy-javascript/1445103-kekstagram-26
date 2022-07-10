import {choose} from '../utils/choose';
import {getRandomDiceNumber} from '../utils/getRandomDiceNumber';
import * as consts from './constants.js.js';
import { getCommentNumberMargin } from '../utils/getCommentNumberMargin';
import { generateCommentArray } from '../comments/generateCommentArray';

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
