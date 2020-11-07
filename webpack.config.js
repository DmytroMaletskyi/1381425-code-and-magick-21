const path = require("path");

module.exports = {
  entry: [
    "./js/utils.js",
    "./js/debounce.js",
    "./js/params.js",
    "./js/alert.js",
    "./js/backend.js",
    "./js/stat.js",
    "./js/similarWizards.js",
    "./js/setup.js",
    "./js/dialog.js",
    "./js/game.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
};
