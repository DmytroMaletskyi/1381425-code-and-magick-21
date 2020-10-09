'use strict';

(() => {
  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  const setupWindow = document.querySelector(`.setup`);
  const setupOpenIcon = document.querySelector(`.setup-open`);
  const setupCloseButton = setupWindow.querySelector(`.setup-close`);
  const nameInputField = setupWindow.querySelector(`.setup-user-name`);
  const setupWizardForm = setupWindow.querySelector(`.setup-wizard-form`);
  const wizardCoat = setupWizardForm.querySelector(`.setup-wizard .wizard-coat`);
  const coatColorField = setupWizardForm.querySelector(`input[name="coat-color"]`);
  const wizardEyes = setupWizardForm.querySelector(`.setup-wizard .wizard-eyes`);
  const eyesColorField = setupWizardForm.querySelector(`input[name="eyes-color"]`);
  const fireballWrapper = setupWizardForm.querySelector(`.setup-fireball-wrap`);
  const fireballColorField = setupWizardForm.querySelector(`input[name="fireball-color"]`);

  const onPopupEscapePress = (evt) => {
    window.utils.isEscEvent(evt, window.utils.isElementFocused(nameInputField, closeSetupWindow));
  };

  const onSetupIconEnterPress = (evt) => {
    window.utils.isEnterEvent(evt, openSetupWindow);
  };

  const onCrossButtonEnterPress = (evt) => {
    window.utils.isEnterEvent(evt, closeSetupWindow);
  };

  const openSetupWindow = () => {
    setupWindow.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscapePress);
  };

  const closeSetupWindow = () => {
    setupWindow.classList.add(`hidden`);

    setupWindow.style.top = null;
    setupWindow.style.left = null;
    document.removeEventListener(`keydown`, onPopupEscapePress);
  };

  const changeCoatColor = () => {
    const randomCoatColor = COAT_COLORS[window.utils.getRandomInt(COAT_COLORS.length)];
    wizardCoat.style.fill = randomCoatColor;
    coatColorField.value = randomCoatColor;
  };

  const changeEyesColor = () => {
    const randomEyesColor = EYES_COLORS[window.utils.getRandomInt(EYES_COLORS.length)];
    wizardEyes.style.fill = randomEyesColor;
    eyesColorField.value = randomEyesColor;
  };

  const changeFireballColor = () => {
    const randomFireballColor = FIREBALL_COLORS[window.utils.getRandomInt(FIREBALL_COLORS.length)];
    fireballWrapper.style.backgroundColor = randomFireballColor;
    fireballColorField.value = randomFireballColor;
  };

  const onFormSubmit = (evt) => {
    window.backend.save(new FormData(setupWizardForm), closeSetupWindow, window.alert.renderAlert);
    evt.preventDefault();
  };

  setupOpenIcon.addEventListener(`click`, openSetupWindow);
  setupOpenIcon.addEventListener(`keydown`, onSetupIconEnterPress);
  setupCloseButton.addEventListener(`click`, closeSetupWindow);
  setupCloseButton.addEventListener(`keydown`, onCrossButtonEnterPress);
  wizardCoat.addEventListener(`click`, changeCoatColor);
  wizardEyes.addEventListener(`click`, changeEyesColor);
  fireballWrapper.addEventListener(`click`, changeFireballColor);
  setupWizardForm.addEventListener(`submit`, onFormSubmit);
})();
