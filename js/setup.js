'use strict';
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_AMOUNT = 4;

const setupWindow = document.querySelector(`.setup`);
const wizardItemTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const similarWizardsList = setupWindow.querySelector(`.setup-similar-list`);
const setupSimilarList = setupWindow.querySelector(`.setup-similar`);

const getRandomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength);

const generateWizardObject = () => {
  const wizardObject = {};

  wizardObject.name = `${NAMES[getRandomIndex(NAMES.length)]} ${SURNAMES[getRandomIndex(SURNAMES.length)]}`;
  wizardObject.coatColor = COAT_COLORS[getRandomIndex(COAT_COLORS.length)];
  wizardObject.eyesColor = EYES_COLORS[getRandomIndex(EYES_COLORS.length)];

  return wizardObject;
};

const createWizardsArray = (wizardsAmount) => {
  const wizardsArray = [];

  for (let i = 0; i < wizardsAmount; i++) {
    wizardsArray.push(generateWizardObject());
  }

  return wizardsArray;
};

const renderWizardElement = (wizard) => {
  const wizardElement = wizardItemTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const renderWizardsList = (wizardsList) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(renderWizardElement(wizardsList[i]));
  }

  similarWizardsList.appendChild(fragment);
};

setupWindow.classList.remove(`hidden`);
const wizardsList = createWizardsArray(WIZARDS_AMOUNT);
renderWizardsList(wizardsList);
setupSimilarList.classList.remove(`hidden`);
