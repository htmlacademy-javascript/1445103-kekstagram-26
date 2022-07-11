import {getRandomDiceNumber} from './utils.js';

// import {generatePostArray} from './data';

// generatePostArray();

//Функция, которая создает картинки на странице

// const buildPicture = (n) => {
//   const template = document.getElementById('picture');
//   const element = template.content.cloneNode(true);
//   const srcLink = element.querySelector('.picture__img');
//   const pictureInfo = element.querySelector('.picture__info');
//   srcLink.src = `photos/${n}.jpg`;
//   pictureInfo.children[0].textContent = '5';
//   pictureInfo.children[1].textContent = '5';
//   return element;
// };

// const displaySomePictures = (n) => {
//   const fragment = document.createDocumentFragment();
//   const pictures = document.querySelector('.pictures');
//   for (let i = 0; i < n; i++) {
//     fragment.appendChild(buildPicture(i+1).content.cloneNode());
//   }
//   pictures.appendChild(fragment);
// };
// console.log(buildPicture(1));
// displaySomePictures();

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
