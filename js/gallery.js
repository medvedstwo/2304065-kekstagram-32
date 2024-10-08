import { isEscapeEvt } from './utils.js';


const COMMENT_STEP = 5;
let commentShown = 0;
let commentsArray = [];

const body = document.querySelector('body');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureImage = bigPictureContainer.querySelector('img');
const bigPictureLikesCount = bigPictureContainer.querySelector('.likes-count');
const bigPictureCommentsCountTotal = bigPictureContainer.querySelector('.social__comment-total-count');
const bigPictureCommentsCountCurrent = bigPictureContainer.querySelector('.social__comment-shown-count');
const bigPictureDesc = bigPictureContainer.querySelector('.social__caption');
const bigPictureContainerClose = bigPictureContainer.querySelector('#picture-cancel');
const commentsLoader = bigPictureContainer.querySelector('.comments-loader');
const commentsList = bigPictureContainer.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

commentsLoader.addEventListener('click', onCommentsLoaderClick);
bigPictureContainerClose.addEventListener('click', onBigPictureContainerCloseClick);

function onCommentsLoaderClick() {
  renderComments(commentsArray);
}

const onDocumentKeydown = (evt) => {
  if (isEscapeEvt(evt)) {
    evt.preventDefault();
    onBigPictureContainerCloseClick();
  }
};

const clearComments = () => {
  commentsList.querySelectorAll('.social__comment').forEach((item) => item.remove());
};

const openBigPicture = ({url, likes, description, comments}) => {
  bigPictureContainer.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureImage.src = url;
  bigPictureImage.alt = description;
  bigPictureLikesCount.textContent = likes;
  bigPictureCommentsCountTotal.textContent = comments.length;
  bigPictureDesc.textContent = description;

  commentsArray = {url, likes, description, comments}.comments;
  renderComments(comments);
};

function onBigPictureContainerCloseClick() {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentShown = 0;
}

const createComment = ({avatar, name, message}) => {

  const comment = commentTemplate.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

function renderComments(comment) {
  clearComments();

  commentShown += COMMENT_STEP;

  const fragment = document.createDocumentFragment();

  if (commentShown >= comment.length) {
    commentsLoader.classList.add('hidden');
    commentShown = comment.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  for (let i = 0; i < commentShown; i++) {
    const commentRender = createComment(comment[i]);
    fragment.appendChild(commentRender);
  }

  bigPictureCommentsCountCurrent.textContent = commentShown;
  bigPictureCommentsCountTotal.textContent = comment.length;

  commentsList.appendChild(fragment);
}

export {openBigPicture, onBigPictureContainerCloseClick};
