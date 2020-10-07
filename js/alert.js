'use strict';

(() => {
  const renderAlert = (text) => {
    const header = document.querySelector(`header`);

    const alertElement = document.createElement(`div`);
    const alertText = document.createElement(`p`);

    alertElement.style = `position: absolute; z-index: 5; top: 0; left: 0; right: 0; background-color: red; display: flex; justify-content: center; align-items: center`;
    alertText.style = `color: white`;
    alertText.textContent = text;

    alertElement.appendChild(alertText);
    header.appendChild(alertElement);
  };

  window.alert = {
    renderAlert
  };
})();
