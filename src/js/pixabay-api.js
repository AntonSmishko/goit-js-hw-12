import axios from 'axios';
import { linkEl } from '../main';
const URL_PIXABAY = 'https://pixabay.com/api/';
const API_KEY = '46219346-243694830f7cca451bf7f7da0';
export const PER_PAGE = 15;

export async function fetchImages(query, page = 1) {
    // використовуємо обєкт параметрів пошуку

    const searchParams = new URLSearchParams({
        q: query,
        per_page: PER_PAGE,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
    });

    const url = `${URL_PIXABAY}?key=${API_KEY}&${searchParams}`;

    const response = await axios.get(url);

    if (response.data.hits.length === 0) {
        const msg = 'Не знайшлося відповідного контенту, спробуйте знову';
        throw new Error(msg);
    }

    return response.data;
}
