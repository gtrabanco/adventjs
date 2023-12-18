function maxGifts(houses) {
  if (houses.length <= 2) {
    return Math.max(...houses);
  }

  const optimize = (arr, index) => {
    if (index >= arr.length) {
      return 0;
    }
    const num = arr[index];
    return Math.max(num + optimize(index + 2), optimize(index + 1));
  };

  return optimize(houses, 0);
}
