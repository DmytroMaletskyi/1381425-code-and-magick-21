'use strict';

(() => {
  /* const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`]; */
  const WIZARDS_AMOUNT = 4;

  const setupWindow = document.querySelector(`.setup`);
  const wizardItemTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  const similarWizardsList = setupWindow.querySelector(`.setup-similar-list`);
  const setupSimilarList = setupWindow.querySelector(`.setup-similar`);

  /*  const generateWizardObject = () => {
    const wizardObject = {};

    wizardObject.name = `${NAMES[window.utils.getRandomInt(NAMES.length)]} ${SURNAMES[window.utils.getRandomInt(SURNAMES.length)]}`;
    wizardObject.coatColor = COAT_COLORS[window.utils.getRandomInt(COAT_COLORS.length)];
    wizardObject.eyesColor = EYES_COLORS[window.utils.getRandomInt(EYES_COLORS.length)];

    return wizardObject;
  };

  const createWizardsArray = (loadedWizards) => {
    const wizardsArray = [];

    for (let i = 0; i < WIZARDS_AMOUNT; i++) {
      wizardsArray.push(loadedWizards.splice(window.utils.getRandomInt(loadedWizards.length) - i, 1)[0]);
    }

    return wizardsArray;
  }; */

  const renderWizardElement = (wizard) => {
    const wizardElement = wizardItemTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const renderWizardsList = (wizardsList) => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizardElement(wizardsList.splice(window.utils.getRandomInt(wizardsList.length) - i, 1)[0]));
    }

    similarWizardsList.appendChild(fragment);
  };

  window.backend.load(renderWizardsList, window.alert.renderAlert);
  setupSimilarList.classList.remove(`hidden`);
})();
