const createDate = (year, month, day) => new Date(year, month - 1, day, 0, 0, 0);

const toUnixEpoch = date => date.valueOf();

const toDateString = unixTimestamp => {
  const date = new Date(unixTimestamp);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const toSeconds = date => date / 1000;

const addHours = hours => date => date + hours * 60 * 60 * 1000;

const add24Hours = addHours(24);

const range = (base, n) => {
  let rangeArray = [];

  for (let i = base; i <= n; i++) {
    rangeArray.push(i);
  }

  return rangeArray;  
}

const toMidnightPrices = (prices, startDate) => {
  let midnightPrices = [];
  let nextDate = add24Hours(startDate);

  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      midnightPrices.push(prices[i]);
    }

    if (prices[i][0] > nextDate) {
      nextDate = add24Hours(nextDate);
      midnightPrices.push(prices[i])
    }
  }

  return midnightPrices;
};

const toMidnightVolumes = (volumes, startDate) => {
  let midnightVolumes = [];
  let nextDate = add24Hours(startDate);

  for (let i = 0; i < volumes.length; i++) {
    if (i === 0) {
      midnightVolumes.push(volumes[i]);
    }

    if (volumes[i][0] > _date) {
      nextDate = add24Hours(nextDate);
      midnightVolumes.push(volumes[i])
    }
  }

  return midnightVolumes;  
}

const toLongestDownTrend = midnightPrices => {
  let longestTrend;
  let start = 0;
  let idx;

  for (let i = 0; i < midnightPrices.length; i++) {
    idx = i;

    if (!i || midnightPrices[i][1] < midnightPrices[i - 1][1]) continue;

    if (!longestTrend || longestTrend[1] - longestTrend[0] < i - start) {
      longestTrend = [start, i];
    }
    start = i;
  }

  return midnightPrices.slice(
    ...(longestTrend && longestTrend[1] - longestTrend[0] > idx - start
      ? longestTrend
      : [start, idx])
  );
};

const toHighestTradingVolume = midnightVolumes => {
  let result;
  let highestVolume;

  for (let i = 0; i < midnightVolumes.length; i++) {
    if (i === 0) {
      highestVolume = midnightVolumes[i][1];
      result = midnightVolumes[i];
    }

    if (highestVolume && highestVolume < midnightVolumes[i][1]) {
      highestVolume = midnightVolumes[i][1];
      result = midnightVolumes[i];
    }
  }

  return result;
};

const toLongestUpTrend = midnightPrices => {
  let longestTrend;
  let start = 0;
  let idx;

  for (let i = 0; i < midnightPrices.length; i++) {
    idx = i;

   
    if (!i || midnightPrices[i][1] > midnightPrices[i - 1][1]) continue;

    if (!longestTrend || longestTrend[1] - longestTrend[0] < i - start) {
      longestTrend = [start, i];
    }
    start = i;
  }

  return midnightPrices.slice(
    ...(longestTrend && longestTrend[1] - longestTrend[0] > idx - start
      ? longestTrend
      : [start, idx])
  );
};

export {
  range,
  createDate,
  toDateString,
  toUnixEpoch,
  toSeconds,
  toMidnightPrices,
  toLongestDownTrend,
  toLongestUpTrend,
  toMidnightVolumes,
  toHighestTradingVolume,
};
