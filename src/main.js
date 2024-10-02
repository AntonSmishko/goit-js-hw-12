// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-api';
import { photoMarkup } from './js/render-functions';

export const linkEl = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  list: document.querySelector('.gallery'),
};

linkEl.form.addEventListener('submit', formHandler);
let gallery = new SimpleLightbox('.gallery a');
function formHandler(e) {
  e.preventDefault();
  linkEl.list.innerHTML = '';
  const query =
    e.target.elements['search-area'].value.trim();
  if (query === '') {
    iziToast.error({
      position: 'topRight',
      message: 'Please try again! All fields is empty',
    });
    return;
  }
  e.target.elements['search-area'].value = '';
  linkEl.loader.classList.add('active');
  fetchImages(query)
    .then(data => {
      linkEl.loader.classList.remove('active');
      if (data.length === 0) {
        linkEl.list.innerHTML = '';
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      photoMarkup(data);
      gallery.refresh();
    })
    .catch(error => {
      linkEl.loader.classList.remove('active');
      linkEl.list.innerHTML = '';
      iziToast.error({
        position: 'topRight',
        message: error,
      });
    });
}
