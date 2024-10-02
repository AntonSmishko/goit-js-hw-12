// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

import { fetchImages } from './js/pixabay-api.js';
import { photoMarkup } from './js/render-functions.js';
import { PER_PAGE } from './js/pixabay-api.js';
export const linkEl = {
    form: document.querySelector('.form'),
    loader: document.querySelector('.loader'),
    list: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more-btn'),
};

linkEl.form.addEventListener('submit', formHandler);
linkEl.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

//
//  для галереї
let gallery = new SimpleLightbox('.gallery a');
//
// пагінація
let pageCount = 1;
let query = null;
let pagesOfEverything = 0;
//

// обробник кнопки дозавантаження
async function loadMoreBtnHandler(e) {
    e.preventDefault();
    pageCount += 1;

    try {
        const data = await fetchImages(query, pageCount);
        photoMarkup(data);
        scroll();
        if (pageCount > Math.min(pagesOfEverything, 33)) {
            linkEl.loadMoreBtn.classList.add('is-hidden');
            return;
        }
    } catch (error) {
        console.log(error);
    }
}

//
async function formHandler(e) {
    e.preventDefault();
    const form = e.currentTarget;
    //  очищаємо вміст перед новим запитом

    linkEl.list.innerHTML = '';
    // отримуємо значення запиту від користувача, оновлюємо змінну та перевіряємо його
    query = e.target.elements['search-area'].value.trim();

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
        // обробка кількості сторінок
        pagesOfEverything = Math.ceil(data.totalHits / PER_PAGE);
        //

        photoMarkup(data);

        linkEl.loader.classList.remove('active');
        gallery.refresh();
        linkEl.loadMoreBtn.classList.remove('is-hidden');
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
}

function scroll() {
    const lastEl = linkEl.list.lastElementChild;

    const heightEl = lastEl.getBoundingClientRect().height;
    console.log(heightEl);
    window.scrollBy({
        top: heightEl * 2,
        left: 0,
        behavior: 'smooth',
    });
}
