function distributeGifts(weights) {
  const limitY = weights.length;
  const limitX = weights[0].length;
  const balanced = [];
  const moveVectors = [
    [0, -1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [0, 1],
  ];

  const reduceSum = (acc = 0, [x, y]) => weights[y][x] + acc;
  const filterPoints = ([x, y]) => weights[y] && weights[y][x];

  for (let y = 0; y < limitY; y++) {
    const resultRow = [];
    for (let x = 0; x < limitX; x++) {
      const points = moveVectors
        .map(([i, j]) => [x + i, y + j])
        .filter(filterPoints);
      const sum = points.reduce(reduceSum, 0);
      const average = Math.round(sum / points.length);
      resultRow.push(average);
    }
    balanced.push(resultRow);
  }

  return balanced;
}
