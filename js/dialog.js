"use strict";

const setupWindow = document.querySelector(`.setup`);
const dialogHandle = document.querySelector(`.upload`);

const onMouseDown = (evt) => {
  evt.preventDefault();

  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  let wasDragged = false;

  const onMouseMove = (moveEvt) => {
    moveEvt.preventDefault();

    wasDragged = true;

    const shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY,
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupWindow.style.top = `${setupWindow.offsetTop - shift.y}px`;
    setupWindow.style.left = `${setupWindow.offsetLeft - shift.x}px`;
  };

  const onMouseUp = (upEvt) => {
    upEvt.preventDefault();

    document.removeEventListener(`mousemove`, onMouseMove);
    document.removeEventListener(`mouseup`, onMouseUp);

    if (wasDragged) {
      const onClickPreventDefault = (clickEvt) => {
        clickEvt.preventDefault();

        dialogHandle.removeEventListener(`click`, onClickPreventDefault);
      };
      dialogHandle.addEventListener(`click`, onClickPreventDefault);
    }
  };

  document.addEventListener(`mousemove`, onMouseMove);
  document.addEventListener(`mouseup`, onMouseUp);
};

dialogHandle.addEventListener(`mousedown`, onMouseDown);

