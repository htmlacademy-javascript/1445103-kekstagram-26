import {showAlert} from './utils.js';

const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) =>
      response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showAlert('Ошибка загрузки');
    });
};

const postData = (onSuccess, onFail, body) => {
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'multipart/form-data',  ?
      // },
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Ошибка загрузки');
      }
    })
    .catch(() => {
      onFail('Ошибка загрузки');
    });
};

export {getData, postData};
