import { galleryItems } from './gallery-items.js';

const galleryItemsMarkUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}"  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
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

  const instance = createInstance(e);
  instance.show();

  document.addEventListener('keydown', isEscapeKeydown.bind(gallery, instance));
});

function createInstance(e) {
  return basicLightbox.create(`<img  src="${e.target.getAttribute('data-source')}">`);
}

function isEscapeKeydown(instance, event) {
  if (event.code === 'Escape') {
    document.removeEventListener('keydown', isEscapeKeydown);
    instance.close();
  }
}
