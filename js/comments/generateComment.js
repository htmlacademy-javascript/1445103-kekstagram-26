import {choose} from '../utils/choose';
import {getRandomDiceNumber} from '../utils/getRandomDiceNumber';
import * as consts from './constants.js';

export function generateComment(i) {
  return {
    id: i, //Unique
    avatar: `img/avatar-${getRandomDiceNumber (consts.AVATAR_NUMBER_START, consts.AVATAR_NUMBER_END)}.svg`,
    message: choose(consts.MESSAGES),
    name: choose(consts.NAMES),
  };
}
