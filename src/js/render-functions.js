import { linkEl } from '../main';
const listEl = document.querySelector('.gallery');
export function photoMarkup(data) {
  if (data.length === 0) {
    linkEl.list.innerHTML = '';
    return;
  }
  linkEl.list.innerHTML = data
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
            <li class="gallery-item">
                <a href="${largeImageURL}" class="gallery-link">
                    <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
                </a>
                <div class="info">
                    <p class="info-item"><span>Likes</span> ${likes}</p>
                    <p class="info-item"><span>Views</span> ${views}</p>
                    <p class="info-item"><span>Comments</span> ${comments}</p>
                    <p class="info-item"><span>Downloads</span> ${downloads}</p>
                </div>
            </li>
        `
    )
    .join('');
  console.log();
}
