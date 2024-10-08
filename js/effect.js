const Effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [Effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [Effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [Effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [Effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [Effect.HEAT]: {
    style: 'brightness',
    unit: '',
  }
};

const effectToSliderOptions = {
  [Effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [Effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [Effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1
  },
  [Effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [Effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  }
};

const imgUploadForm = document.querySelector('.img-upload__form');
const sliderElement = imgUploadForm.querySelector('.effect-level__slider');
const sliderContainerElement = imgUploadForm.querySelector('.img-upload__effect-level');
const effectLevelElement = imgUploadForm.querySelector('.effect-level__value');
const imgElement = imgUploadForm.querySelector('.img-upload__preview img');
const effectsElement = imgUploadForm.querySelector('.img-upload__effects');

let chosenEffect = Effect.DEFAULT;

const isDefault = () => chosenEffect === Effect.DEFAULT;

const setImgStyle = () => {
  if(isDefault()) {
    imgElement.style.filter = null;
    return;
  }

  const {value} = effectLevelElement;
  const {style, unit} = effectToFilter[chosenEffect];
  imgElement.style.filter = `${style}(${value}${unit})`;
};

const showSlider = () => {
  sliderContainerElement.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainerElement.classList.add('hidden');
};

const onSliderUpdate = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImgStyle();
};

const createSlider = ({min, max, step}) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    start: max,
    step,
    connect: 'lower',
    format: {
      to: function(value) {
        return Number(value);
      },
      from: function(value) {
        return Number(value);
      }
    }
  });

  sliderElement.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({min, max, step}) => {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    start: max,
    step,
  });
};

const setSlider = () => {
  if(isDefault()) {
    hideSlider();
  } else {
    updateSlider(effectToSliderOptions[chosenEffect]);
    showSlider();
  }
};

const setEffect = (effect) => {
  chosenEffect = effect;
  setSlider();
  setImgStyle();
};

const resetSlider = () => {
  setEffect(Effect.DEFAULT);
};

const onEffectChange = (evt) => {
  setEffect(evt.target.value);
};

const initSlider = () => {
  createSlider(effectToSliderOptions[chosenEffect]);
  effectsElement.addEventListener('change', onEffectChange);
};

export {initSlider, resetSlider};
