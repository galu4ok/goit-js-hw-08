// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// 1) Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm.
// 2) Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека
// була встановлена через npm(синтаксис import /export).
// 3) Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

const galleryContainer = document.querySelector('.gallery');

const makeGalleryItemMarkup = ({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;

const galleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryContainer.style.cssText = `list-style: none`;
