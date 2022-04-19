import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryLightboxMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li><a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}"
    alt="${description}"
    title="${description}" />
    </a></li>
    `;
  })
  .join('');

const gallery = document.querySelector('ul.gallery');

gallery.insertAdjacentHTML('beforeend', galleryLightboxMarkUp);
const galleryLightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
