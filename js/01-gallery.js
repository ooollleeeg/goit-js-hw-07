// Виконуй це завдання у файлах 01 - gallery.html і 01 - gallery.js.Розбий його на декілька
// підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону 
// елемента галереї.

// Реалізація делегування на div.gallery і отримання url великого зображення.

// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй 
// CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.

// Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з 
// документацією і прикладами.

// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки
// basicLightbox.
    
import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageContainer = document.querySelector('.gallery');

function createImageGalery(elements) {
   return elements
        .map(({ original, preview, description }) => 
            `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`)
       .join("");
}

const imageMarkup = createImageGalery(galleryItems);
imageContainer.insertAdjacentHTML("beforeend", imageMarkup);

imageContainer.addEventListener('click', onImageContainerClick)
function onImageContainerClick(event) {
    event.preventDefault();
    const imageLink = event.target.dataset.source;
    const isGalleryImageEl = event.target.classList.contains('gallery__image');
       if (!isGalleryImageEl) {
       return
    }
    const instance = basicLightbox.create(`
		<img src="${imageLink}">
	`);
    instance.show()
}





    



