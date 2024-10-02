import axios from 'axios';
import { linkEl } from '../main';
const URL_PIXABAY = 'https://pixabay.com/api/';
const API_KEY = '46219346-243694830f7cca451bf7f7da0';
// робимо запит , збрираю url string , якщо все ок то повертаю дані у вигляді [{}], якщо не ок то генерую помилку та
// очищаю innerHTML в ul
// export function fetchImages(query) {
//   return fetch(`${URL_PIXABAY}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true
// `)
//     .then(response => {
//       if (!response.ok) {
//         linkEl.list.innerHTML = '';
//         throw new Error(
//           `Error fetching images: ${response.status} ${response.statusText}`
//         );
//       }
//       return response.json();
//     })
//     .then(data => data.hits);
// }

export async function fetchImages(query) {
  try {
    const response = await axios.get(
      `${URL_PIXABAY}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true
`
    );

    return response.data;
  } catch (error) {
    throw new Error(
      `Error fetching images: ${response.status} ${response.statusText}`
    );
  }
}
