'use strict';

(() => {
  const WIZARDS_AMOUNT = 4;

  const setupWindow = document.querySelector(`.setup`);
  const wizardItemTemplate = document.querySelector(`#similar-wizard-template`).content.querySelector(`.setup-similar-item`);
  const similarWizardsList = setupWindow.querySelector(`.setup-similar-list`);
  const setupSimilarList = setupWindow.querySelector(`.setup-similar`);

  let wizards = [];

  const renderWizardElement = (wizard) => {
    const wizardElement = wizardItemTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const getRank = (wizard) => {
    let rank = 0;

    if (wizard.colorCoat === window.setup.coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === window.setup.eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const renderWizardsList = (wizardsList) => {
    while (similarWizardsList.lastChild) {
      similarWizardsList.removeChild(similarWizardsList.lastChild);
    }

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < WIZARDS_AMOUNT; i++) {
      fragment.appendChild(renderWizardElement(wizardsList[i]));
    }

    similarWizardsList.appendChild(fragment);
  };

  const nameComparator = (current, next) => {
    if (current > next) {
      return 1;
    } else if (current < next) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = () => {
    renderWizardsList(wizards.sort((current, next) => {
      let rankDiff = getRank(next) - getRank(current);
      if (rankDiff === 0) {
        rankDiff = nameComparator(current.name, next.name);
      }
      return rankDiff;
    }));
  };

  const successHandler = (data) => {
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.alert.renderAlert);
  setupSimilarList.classList.remove(`hidden`);

  window.similarWizards = {
    updateWizards
  };
})();
