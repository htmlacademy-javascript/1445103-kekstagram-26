import {generateComment, generateCommentMarkup} from './data.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

export function showBigPicture(picture) {
  const bigPicture = document.querySelector('.big-picture');
  const pictureImg = bigPicture.querySelector('.big-picture__img');
  const bigPictureLikes = bigPicture.querySelector('.social__likes');
  const bigPictureComments = bigPicture.querySelector('.social__comments');
  const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
  bigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  bigPictureClose.addEventListener('click', () => {closeBigPicture(bigPicture);});
  document.addEventListener('keydown', (event) => {if (isEscapeKey(event)) {
    event.preventDefault();
    closeBigPicture(bigPicture);
  }});
  pictureImg.children[0].src = picture.children[0].src;
  bigPictureLikes.textContent = picture.querySelector('.picture__info').children[1].textContent;
  bigPictureComments.textContent = picture.querySelector('.picture__info').children[0].textContent;

  // добавление комментов
  const commentsContainer = bigPicture.querySelector('.social__comments');
  const commentsFragment = document.createDocumentFragment();
  let comment = '';
  for (let i = 1; i < 5; i++){  // цикл добавляющий комменты
    comment = generateCommentMarkup(generateComment(i));
    commentsFragment.appendChild(comment);
  }
  commentsContainer.appendChild(commentsFragment);
}

function closeBigPicture(bigPicture) {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}
