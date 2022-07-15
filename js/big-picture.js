
export function showBigPicture(picture) {
  console.log('!!');
  const bigPicture = document.querySelector('.big-picture');
  const pictureImg = bigPicture.querySelector('.big-picture__img');
  const bigPictureLikes = bigPicture.querySelector('.social__likes');
  const bigPictureComments = bigPicture.querySelector('.social__comments');
  bigPicture.classList.remove('.hidden');
  pictureImg.children[0].src = picture.children[0].src;
  bigPictureLikes.textContent = picture.querySelector('.picture__info').children[1].textContent;
  bigPictureComments.textContent = picture.querySelector('.picture__info').children[0].textContent;
}

