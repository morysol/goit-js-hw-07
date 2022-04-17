import { galleryItems } from './gallery-items.js';

const galleryItemsMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="'${original}'"  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt=""${description}"
    />
  </a>
</div>
    `;
  })
  .join('');

const gallery = document.querySelector('div.gallery');

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkUp);

gallery.addEventListener('click', e => {
  e.preventDefault();

  e.currentTarget.onclick = () => {
    basicLightbox.create(`<img  src="${e.target.getAttribute('data-source')}">`).show();
  };

  e.currentTarget.removeAttribute('onclick');
});
