'use strict';

(() => {
  window.params = {
    fireballSize: 22,

    wizardSpeed: 3,

    wizardWidth: 70,

    getFireballSpeed: (isToTheLeft) => (isToTheLeft ? 2 : 5),

    getWizardHeight: (wizardWidth) => 1.337 * wizardWidth,

    getWizardX: (gameFieldWidth) => (gameFieldWidth - window.params.wizardWidth) / 2,

    getWizardY: (gameFieldHeight) => gameFieldHeight / 3
  };
})();
