const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureElement = pictureTemplate.cloneNode(true);



// Отобразить фотографии других пользователей.

// Заведите модуль, который будет отвечать за отрисовку миниатюр.

// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

// Подключите модуль в проект.
