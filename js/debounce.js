'use strict';

(() => {
  let DEBOUNCE_INTERVAL = 500;

  window.debounce = (cb) => {
    let lastTimeout = null;

    return () => {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }

      lastTimeout = window.setTimeout(() => {
        cb();
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
