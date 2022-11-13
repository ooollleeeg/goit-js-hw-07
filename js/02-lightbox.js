// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку
// SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття 
// і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
    

import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');

function createImageGalery(elements) {
   return elements
        .map(({ original, preview, description }) => 
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
             </li>`)
       .join("");
}

const imageMarkup = createImageGalery(galleryItems);
imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

const lightbox = new SimpleLightbox('.gallery__link', {captionsData: "alt", captionDelay: 250});

