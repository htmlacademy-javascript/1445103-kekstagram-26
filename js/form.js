import {onPopupEscKeydown} from './utils.js';
import {onFilterButtonChange, onScaleButtonClick, scaleContainer, effectList, sliderWrapper} from './effects.js';
import {postData} from './api.js';
import {showMessageSuccess, showMessageError} from './messages.js';
import {FILE_TYPES, MAX_STRING_LENGTH, HASHTAGS_QUANTITY} from './constants.js';
import '../pristine/pristine.min.js';

const imgUploadField = document.querySelector('#upload-file');
const editPhoto = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const buttonCancel = document.querySelector('.img-upload__cancel');
const buttonSubmit = document.querySelector('.img-upload__submit');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const body = document.querySelector('body');
const hashtagsField = document.querySelector('.text__hashtags');
const commentsField = document.querySelector('.text__description');
const regex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const fileChooser = document.querySelector('.img-upload__input');

const uploadImage = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imgPreview.src = URL.createObjectURL(file);
  }
};

const checkCommentsLength = (value) => value.length <= MAX_STRING_LENGTH;

const getHashtags = (string) => string.split(' ').filter((item) => item !== '');

const getHashtagsToLowerCase = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.map((element) => element.toLowerCase());
};

const getUniqueHashtags = (string) => {
  const hashtags = getHashtagsToLowerCase(string);
  const uniqueHashtags = new Set(hashtags);
  return hashtags.length === uniqueHashtags.size;
};

const checkQuantity = (string) => getHashtags(string).length <= HASHTAGS_QUANTITY;

const checkHashtagsSymbols = (string) => {
  const hashtags = getHashtags(string);
  return hashtags.every((element) => regex.test(element));
};

const closeOnEsc = onPopupEscKeydown.bind({func: closeUploadPopup});

const onPopupCloseButtonClick = () => {
  closeUploadPopup ();
};

function closeUploadPopup  () {
  editPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnEsc);
  document.removeEventListener('click', onPopupCloseButtonClick);
  scaleContainer.removeEventListener('click', onScaleButtonClick);
  effectList.removeEventListener('change', onFilterButtonChange);
  imgPreview.removeAttribute('class');
  imgPreview.removeAttribute('style');
  form.reset();
}

const onFocusBlurEscKeydown = () => {
  commentsField.addEventListener('focus', () => {
    document.removeEventListener('keydown', closeOnEsc);
  });
  commentsField.addEventListener('blur', () => {
    document.addEventListener('keydown', closeOnEsc);
  });
  hashtagsField.addEventListener('focus', () => {
    document.removeEventListener('keydown', closeOnEsc);
  });
  hashtagsField.addEventListener('blur', () => {
    document.addEventListener('keydown', closeOnEsc);
  });
};

const blockSubmitButton = () => {
  buttonSubmit.disabled = true;
  buttonSubmit.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  buttonSubmit.disabled = false;
  buttonSubmit.textContent = 'Опубликовать';
};


function showUploadPopup (evt) {
  editPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  buttonCancel.addEventListener('click', onPopupCloseButtonClick);
  document.addEventListener('keydown', closeOnEsc);
  onFocusBlurEscKeydown();
  sliderWrapper.classList.add('hidden');
  scaleContainer.addEventListener('click', onScaleButtonClick);
  effectList.addEventListener('change', onFilterButtonChange);
  uploadImage(evt);
}

const pristine = new Pristine(form, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text-valid',
  errorTextParent: 'text',
  errorTextTag: 'div',
  errorTextClass: 'text__error'
});
pristine.addValidator(commentsField, checkCommentsLength, `Not more then ${MAX_STRING_LENGTH} symbols`);
pristine.addValidator(hashtagsField, getUniqueHashtags, 'Hashtags should be unique');
pristine.addValidator(hashtagsField, checkQuantity, 'Not more then 5 hashtags');
pristine.addValidator(hashtagsField, checkHashtagsSymbols, 'Hashtag begins with "#" and consists of letters/numbers, not more then 20 symbols');


const submitForm = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      postData(
        () => {
          onSuccess();
          unblockSubmitButton();
          showMessageSuccess();
          closeUploadPopup();
        },
        () => {
          unblockSubmitButton();
          showMessageError();
          closeUploadPopup();
        },
        new FormData(evt.target),
      );
    }
  });
};

imgUploadField.addEventListener('change', showUploadPopup);

export {closeUploadPopup, submitForm, imgUploadField, showUploadPopup, body};
