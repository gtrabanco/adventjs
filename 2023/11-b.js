function getIndexsForPalindrome(word) {
  if (word === word.split("").reverse().join("")) {
    return [];
  }

  const wLength = word.length;
  for (const x of Array.from({ length: wLength }).keys()) {
    for (const y of Array.from({ length: wLength }).keys()) {
      const w = word.split("");
      w[x] = word.at(y);
      w[y] = word.at(x);

      if (w.join("") === w.reverse().join("")) {
        return [x, y];
      }
    }
  }

  return null;
}
