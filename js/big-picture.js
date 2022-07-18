import { DESCRIPTIONS } from './constants.js';
import {generateComment, generateCommentMarkup} from './data.js';
import { choose, getRandomDiceNumber } from './utils.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const bigPicture = document.querySelector('.big-picture');
const pictureImg = bigPicture.querySelector('.big-picture__img');
const bigPictureLikes = bigPicture.querySelector('.social__likes');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');

//Переменные для добавления комментариев
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();

export function showBigPicture(picture) {
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPictureClose.addEventListener('click', () => {closeBigPicture(bigPicture);});
  document.addEventListener('keydown', (event) => {if (isEscapeKey(event)) {
    event.preventDefault();
    closeBigPicture(bigPicture);
  }});
  pictureImg.children[0].src = picture.children[0].src;
  bigPictureLikes.textContent = picture.querySelector('.picture__info').children[1].textContent;
  bigPicture.querySelector('.social__caption').textContent = choose(DESCRIPTIONS);
  bigPicture.querySelector('.social__likes').innerHTML = `Нравится <span class="likes-count">${getRandomDiceNumber(100, 300)}</span>`;

  //Добавление комментов
  let comment = '';
  for (let i = 1; i < 5; i++){  //Цикл, добавляющий комменты
    comment = generateCommentMarkup(generateComment(i));
    commentsFragment.appendChild(comment);
  }
  commentsContainer.appendChild(commentsFragment);
}

function closeBigPicture(image) {
  image.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}
