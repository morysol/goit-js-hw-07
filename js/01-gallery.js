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

  const instance = basicLightbox.create(`<img  src="${e.target.getAttribute('data-source')}">`);
  instance.show();

  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      document.removeEventListener('keydown', event);

      instance.close();
    }
  });

  gallery.removeEventListener('click', e);
});
