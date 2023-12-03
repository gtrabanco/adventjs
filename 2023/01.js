// Same points using Set as using an array

function findFirstRepeated(gifts) {
  // const memory = new Set();
  const memory = [];

  for (const gift of gifts) {
    // if (memory.has(gift)) {
    if (memory.includes(gift)) {
      return gift;
    }

    // memory.add(gift);
    memory.push(gift);
  }

  return -1;
}

console.log(findFirstRepeated([1, 2, 3, 2, 1]));
