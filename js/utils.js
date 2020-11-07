'use strict';

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const isEscEvent = (evt, action) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    action();
  }
};

const isEnterEvent = (evt, action) => {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    action();
  }
};

const isElementFocused = (element, action) => {
  return () => {
    if (element !== document.activeElement) {
      action();
    }
  };
};

window.utils = {
  getRandomInt: (max) => Math.floor(Math.random() * Math.floor(max)),

  getMaxElement,

  isEscEvent,

  isEnterEvent,

  isElementFocused
};
