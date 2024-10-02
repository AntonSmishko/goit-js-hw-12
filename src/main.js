// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

import { fetchImages } from './js/pixabay-api';
import { photoMarkup } from './js/render-functions';

export const linkEl = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  list: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

linkEl.form.addEventListener('submit', formHandler);
linkEl.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

// обробник кнопки дозавантаження
function loadMoreBtnHandler(e) {
  e.preventDefault();

  pageCount += 1;
}

//
//  для галереї
let gallery = new SimpleLightbox('.gallery a');
//
// для пагінації
let pageCount = null;
//
//
async function formHandler(e) {
  e.preventDefault();
  const form = e.currentTarget;
  linkEl.list.innerHTML = '';
  // отримуємо значення запиту від користувача
  const query = e.target.elements['search-area'].value.trim();
  if (query === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Введіть будь-ласка значення для пошуку',
    });
    return;
  }

  // перед запитом показуємо лоадер

  linkEl.loader.classList.add('active');
  // робимо запит
  try {
    const data = await fetchImages(query);

    photoMarkup(data);

    linkEl.loader.classList.remove('active');
    linkEl.loadMoreBtn.classList.remove('is-hidden');
    gallery.refresh();
  } catch (error) {
    linkEl.loader.classList.remove('active');
    linkEl.loadMoreBtn.classList.add('is-hidden');

    linkEl.list.innerHTML = '';

    iziToast.error({
      position: 'topRight',
      message: error.message,
    });
  } finally {
    form.reset();
  }
  // await fetchImages(query)
  // обробка запиту , позначили що прийшла data , ховаю лоадер та обробляємо негативний кейс
  // .then(data => {
  //   linkEl.loader.classList.remove('active');
  //   if (data.hits.length === 0) {
  //     linkEl.list.innerHTML = '';
  //     iziToast.error({
  //       position: 'topRight',
  //       message:
  //         'Sorry, there are no images matching your search query. Please try again!',
  //     });
  //     return;
  //   }
  //   // отримали дані та прокидуємо їх в функцію для створення розмітки
  //   photoMarkup(data);
  //   linkEl.loadMoreBtn.classList.remove('is-hidden');
  //   gallery.refresh();
  // })
  // .catch(error => {
  //   linkEl.loadMoreBtn.classList.add('is-hidden');
  //   linkEl.loader.classList.remove('active');
  //   linkEl.list.innerHTML = '';
  //   iziToast.error({
  //     position: 'topRight',
  //     message: error,
  //   });
  // });
}
