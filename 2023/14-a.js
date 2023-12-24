// This does not work because it takes so much time to be executed
function maxGifts(houses) {
  if (houses.length === 0) {
    return 0;
  }

  const first = houses.at(0) ?? 0;
  const sum1 = maxGifts(houses.slice(2));
  const second = houses.at(1) ?? 0;
  return Math.max(first + sum1, second);
}
