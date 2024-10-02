import { linkEl } from '../main';
const URL_PIXABAY = 'https://pixabay.com/api/';
const API_KEY = '46219346-243694830f7cca451bf7f7da0';

export function fetchImages(query) {
  return fetch(`${URL_PIXABAY}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true
`)
    .then(response => {
      if (!response.ok) {
        linkEl.list.innerHTML = '';
        throw new Error(
          `Error fetching images: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then(data => data.hits);
}
