function maxGifts(houses) {
  if (houses.length <= 1) {
    return houses[0] ?? 0;
  }

  const result = [houses[0], houses[1] ?? 0];

  for (let i = 2; i < houses.length; i++) {
    const a = result[i - 2];
    const b = result[i - 1];
    const gifts = houses[i];
    result[i] = Math.max(a + gifts, b);
  }

  return result.at(-1);
}
