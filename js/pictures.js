import { getRandomDiceNumber } from './utils.js';

//Функция, которая создает картинки на странице
export function photoDrawer(numOfImages) {
  const pictures = document.querySelector('.pictures'); // обращение к блоку pictures
  const template = document.getElementById('picture');

  for (let i = 0; i < numOfImages; i++){
    const element = template.content.cloneNode(true);
    const link = element.querySelector('.picture__img');
    const picInfo = element.querySelector('.picture__info');
    picInfo.children[0].textContent = getRandomDiceNumber(0, 100);
    picInfo.children[1].textContent = getRandomDiceNumber(0, 100);
    link.src = `photos/${i+1}.jpg`;
    pictures.appendChild(element);
  }
}

photoDrawer(25);
