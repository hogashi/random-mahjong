export const allHais = [
  '一萬', '二萬', '三萬', '四萬', '五萬', '六萬', '七萬', '八萬', '九萬',
  '一筒', '二筒', '三筒', '四筒', '五筒', '六筒', '七筒', '八筒', '九筒',
  '一索', '二索', '三索', '四索', '五索', '六索', '七索', '八索', '九索',
  '東　', '南　', '西　', '北　', '白　', '発　', '中　',
] as const;
type HaiName = typeof allHais[number];
export type HaiNameArray = HaiName[];
export type HaiNameSetForShow = {
  upper: string[];
  lower: string[];
};

export const getHais = (n: number = 16) => {
  return [...allHais, ...allHais, ...allHais, ...allHais].sort(() => Math.random() - 0.5).slice(0, n);
};

export const splitHaiNameForShow = (hais: HaiNameArray): HaiNameSetForShow => {
  return hais.reduce(
    (set: HaiNameSetForShow, hai: HaiName) => ({
      upper: [...set.upper, hai[0]],
      lower: [...set.lower, hai[1]],
    }),
    { upper: [], lower: [] }
  );
};

const run = () => {
  const [dora, hiddenDora, ...tehai] = getHais(16);

  const show = (hais: HaiNameArray) => {
    const { upper, lower } = splitHaiNameForShow(hais);
    console.log(`${upper.join('')}\n${lower.join('')}`);
  };

  show([dora, hiddenDora]);
  show(tehai.sort((a, b) => allHais.findIndex((v) => v === a) - allHais.findIndex((v) => v === b)));
};

run();
