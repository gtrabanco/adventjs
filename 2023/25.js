function travelDistance(map) {
  const coordinates = map.split("\n").reduce((pos, row, y) => {
    const chars = row.split("");

    for (let x = 0; x < chars.length; x++) {
      const char = chars[x];
      const key = char === "S" ? 0 : char;
      if (key !== ".") {
        pos[key] = [x, y];
      }
    }

    return pos;
  }, {});

  let sum = 0;
  const pointsNumber = Object.keys(coordinates).map(Number);
  for (const pos of pointsNumber) {
    const prev = coordinates[pos - 1];
    if (!prev) {
      continue;
    }

    const [x1, y1] = coordinates[pos];
    const [x0, y0] = prev;
    const i = Math.abs(x1 - x0);
    const j = Math.abs(y1 - y0);
    sum += i + j;
  }
  return sum;
}
