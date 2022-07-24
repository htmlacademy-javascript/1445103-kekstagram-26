import {ALERT_SHOW_TIME, TIME_OUT_DELAY} from './constants.js';

const randInt = (min, max) => {
  if (min < 0 || max < 0 || max < min) {
    throw new Error('Incorrect value range');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArrayElement = (elements) => elements[randInt(0, elements.length - 1)];

const getRandomUniqueElements = (arr) => {
  const newArray = arr.slice();
  const elements = [];
  for (let i = 0; i < arr.length; i++) {
    const randomId = randInt(0, newArray.length - 1);
    elements.push(newArray[randomId]);
    newArray.splice(randomId, 1);
  }
  return elements;
};

const debounce = (callback, timeoutDelay = TIME_OUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

function onPopupEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    this.func();
  }
}

export {randInt, getRandomArrayElement, getRandomUniqueElements, showAlert, debounce, onPopupEscKeydown};
