'use strict';
const NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARDS_AMOUNT = 4;

const setupWindow = document.querySelector(`.setup`);
const setupOpenIcon = document.querySelector(`.setup-open`);
const setupCloseButton = setupWindow.querySelector(`.setup-close`);
const nameInputField = setupWindow.querySelector(`.setup-user-name`);
const setupWizardForm = setupWindow.querySelector(`.setup-wizard-form`);
const wizardItemTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
const wizardCoat = setupWizardForm.querySelector(`.setup-wizard .wizard-coat`);
const coatColorField = setupWizardForm.querySelector(`input[name="coat-color"]`);
const wizardEyes = setupWizardForm.querySelector(`.setup-wizard .wizard-eyes`);
const eyesColorField = setupWizardForm.querySelector(`input[name="eyes-color"]`);
const fireballWrapper = setupWizardForm.querySelector(`.setup-fireball-wrap`);
const fireballColorField = setupWizardForm.querySelector(`input[name="fireball-color"]`);
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

// Events

const onPopupEscapePress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    if (nameInputField !== document.activeElement) {
      closeSetupWindow();
    }
  }
};

const onSetupIconEnterPress = (evt) => {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    openSetupWindow();
  }
};

const onCrossButtonEnterPress = (evt) => {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    closeSetupWindow();
  }
};

const openSetupWindow = () => {
  setupWindow.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscapePress);
};

const closeSetupWindow = () => {
  setupWindow.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscapePress);
};

const changeCoatColor = () => {
  const randomCoatColor = COAT_COLORS[getRandomIndex(COAT_COLORS.length)];
  wizardCoat.style.fill = randomCoatColor;
  coatColorField.value = randomCoatColor;
};

const changeEyesColor = () => {
  const randomEyesColor = EYES_COLORS[getRandomIndex(EYES_COLORS.length)];
  wizardEyes.style.fill = randomEyesColor;
  eyesColorField.value = randomEyesColor;
};

const changeFireballColor = () => {
  const randomFireballColor = FIREBALL_COLORS[getRandomIndex(FIREBALL_COLORS.length)];
  fireballWrapper.style.backgroundColor = randomFireballColor;
  fireballColorField.value = randomFireballColor;
};

setupOpenIcon.addEventListener(`click`, openSetupWindow);
setupOpenIcon.addEventListener(`keydown`, onSetupIconEnterPress);
setupCloseButton.addEventListener(`click`, closeSetupWindow);
setupCloseButton.addEventListener(`keydown`, onCrossButtonEnterPress);
wizardCoat.addEventListener(`click`, changeCoatColor);
wizardEyes.addEventListener(`click`, changeEyesColor);
fireballWrapper.addEventListener(`click`, changeFireballColor);

const wizardsList = createWizardsArray(WIZARDS_AMOUNT);
renderWizardsList(wizardsList);
setupSimilarList.classList.remove(`hidden`);
