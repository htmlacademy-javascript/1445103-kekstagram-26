import { getRandomDiceNumber } from './utils.js';
import { showBigPicture } from './big-picture.js';

//Функция, которая создает картинки на странице
export function photoDrawer(numOfImages) {
  const pictures = document.querySelector('.pictures'); // обращение к блоку pictures
  const template = document.querySelector('#picture').content.querySelector('.picture');

  for (let i = 0; i < numOfImages; i++){
    const element = template.cloneNode(true);
    const link = element.querySelector('.picture__img');
    const picInfo = element.querySelector('.picture__info');
    picInfo.children[0].textContent = getRandomDiceNumber(0, 100);
    picInfo.children[1].textContent = getRandomDiceNumber(0, 100);
    link.src = `photos/${i+1}.jpg`;
    element.addEventListener('click', () => {showBigPicture(element);});
    pictures.appendChild(element);
  }
}

photoDrawer(25);
