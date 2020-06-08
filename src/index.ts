import { allHais, getHais, HaiNameArray, splitHaiNameForShow } from './random-mahjong';

const show = (hais: HaiNameArray, element: HTMLElement): void => {
  const { upper, lower } = splitHaiNameForShow(hais);
  element.innerHTML = `${upper.join('')}<br>${lower.join('')}`;
};

const [dora, hiddenDora, ...tehai] = getHais(16);

show([dora, hiddenDora], document.getElementById('dora'));
show(
  tehai.sort((a, b) => allHais.findIndex((v) => v === a) - allHais.findIndex((v) => v === b)),
  document.getElementById('tehai')
);
