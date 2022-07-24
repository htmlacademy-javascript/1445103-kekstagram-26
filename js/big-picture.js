import {onPopupEscKeydown} from './utils.js';
import {MAX_COMMENT_NUMBER} from './constants.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentsContainer = bigPicture.querySelector('.social__comments');
const commentsToShowCount = bigPicture.querySelector('.social__comment-count');
const body = document.querySelector('body');
let count = 0;

const createComment = (comment) => {
  const newCommentItem = document.createElement('li');
  newCommentItem.classList.add('social__comment');
  const commentImage = document.createElement('img');
  commentImage.classList.add('social__picture');
  commentImage.src = comment.avatar;
  commentImage.alt = comment.name;
  commentImage.width = 35;
  commentImage.height = 35;
  newCommentItem.appendChild(commentImage);

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  newCommentItem.appendChild(commentText);
  return newCommentItem;
};

const showBigPicture = (picture) => {
  const closeOnEsc = onPopupEscKeydown.bind({func: closeBigPicture});

  function closeBigPicture() {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeOnEsc);
    closeButton.removeEventListener('click', closeBigPicture);
    commentsLoader.removeEventListener('click', commentsLoaderOnClick);
    count = 0;
  }

  function commentsLoaderOnClick() {
    count += MAX_COMMENT_NUMBER;
    renderCommentsSlice();
  }

  function renderCommentsSlice() {
    commentsContainer.innerHTML = '';
    const commentsFragment = document.createDocumentFragment();
    const commentsToShow = picture.comments.slice(0, count + MAX_COMMENT_NUMBER);
    commentsToShow.forEach((comment) => {
      commentsFragment.appendChild(createComment(comment));
    });
    commentsContainer.appendChild(commentsFragment);
    commentsLoader.classList.toggle('hidden', picture.comments.length === commentsToShow.length);
    commentsToShowCount.innerHTML = `${commentsToShow.length} из <span class="comments-count">${picture.comments.length}</span> комментариев`;
  }

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  bigPicture.querySelector('.big-picture__img img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPicture.querySelector('.comments-count').textContent = picture.comments.length;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  renderCommentsSlice();
  commentsLoader.addEventListener('click', commentsLoaderOnClick);

  closeButton.addEventListener('click', closeBigPicture);
  document.addEventListener('keydown', closeOnEsc);
};

export {showBigPicture};
