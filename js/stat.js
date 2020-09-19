'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 20;
const FONT_SIZE = 16;
const FONT = `PT Mono`;
const FONT_COLOR = `#000`;
const MAX_BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const BAR_GAP = 50;
const SIGNATURE_Y = CLOUD_Y + CLOUD_HEIGHT - 1.5 * GAP;
const PLAYER_COLOR = `rgba(255, 0, 0, 1)`;

const renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getMaxElement = (arr) => {
  let maxElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const renderPlayerResults = (ctx, name, time, maxTime, index) => {
  let barHeight = MAX_BAR_HEIGHT * time / maxTime;
  let barColor = (name === `Вы`) ? PLAYER_COLOR : `hsla(240, ${getRandomInt(100)}%, 50%, 1)`;


  ctx.fillStyle = barColor;
  ctx.fillRect(CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * index, SIGNATURE_Y - GAP / 2, BAR_WIDTH, -barHeight);

  ctx.fillStyle = FONT_COLOR;
  ctx.fillText(name, CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * index, SIGNATURE_Y);
  ctx.fillText(Math.round(time), CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * index, SIGNATURE_Y - 1.5 * GAP - barHeight);
};

window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP / 2, CLOUD_Y + GAP / 2, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#FFF`);

  ctx.fillStyle = FONT_COLOR;
  ctx.font = `${FONT_SIZE}px ${FONT}`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText(`Список результатов:`, CLOUD_X + GAP, CLOUD_Y + GAP + FONT_SIZE);

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    renderPlayerResults(ctx, names[i], times[i], maxTime, i);
  }
};
