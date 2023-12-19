function revealSabotage(store) {
  const numericStore = store.map((row) =>
    row.join("-").replaceAll(" ", 0).split("-")
  );
  const points = [];
  for (let y in store) {
    for (let x in store[y]) {
      const char = store[y][x];
      if (char !== "*") {
        continue;
      }

      const j = +y;
      const i = +x;
      points.push(
        [i - 1, j - 1],
        [i, j - 1],
        [i + 1, j - 1],
        [i - 1, j],
        [i + 1, j],
        [i - 1, j + 1],
        [i, j + 1],
        [i + 1, j + 1]
      );
    }
  }

  for (const [i, j] of points) {
    if (!numericStore[j] || !numericStore[j][i] || numericStore[j][i] === "*") {
      continue;
    }

    numericStore[j][i] = (++numericStore[j][i]).toString();
  }
  return numericStore.map((row) =>
    row.join("-").replaceAll("0", " ").split("-")
  );
}
