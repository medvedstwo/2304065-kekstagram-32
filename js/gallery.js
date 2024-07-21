import { photoDesc } from './data.js';
import { renderPosts } from './thumbnail.js';

renderPosts(photoDesc);

const pictureContainer = document.querySelector('.pictures');
const smallPicture = pictureContainer.querySelectorAll('.picture');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureContainerClose = bigPictureContainer.querySelector('#picture-cancel');

smallPicture.forEach((picture) => {
  picture.addEventListener('click', function(evt) {
    evt.preventDefault();
    bigPictureContainer.classList.remove('hidden');
  });
});

bigPictureContainerClose.addEventListener('click', function () {
  bigPictureContainer.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPictureContainer.classList.add('hidden');
  };
})

console.log (pictureContainer);
console.log (smallPicture);
console.log (bigPictureContainer);



// Задача
// Реализовать сценарий просмотра фотографий в полноразмерном режиме. В таком режиме пользователь получает несколько дополнительных возможностей: детально рассмотреть изображение, поставить «лайк», почитать комментарии, оставленные другими пользователями.

// Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением.

// Окно должно открываться при клике на миниатюру. Данные для окна (изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.

// Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:

// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

// Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.

// Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35" height="35">
//   <p class="social__text">{{текст комментария}}</p>
// </li>

//         Копировать

// Описание фотографии description вставьте строкой в блок .social__caption.

// После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.

// Подключите модуль в проект.
