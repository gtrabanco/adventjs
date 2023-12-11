// 270
function drawGift(size, symbol) {
  if (size < 2) {
    return "#\n";
  }

  const result = [];
  const reversedLines = [];
  const each2DWithoutLine = size - 2;
  result.push(" ".repeat(size - 1) + "#".repeat(size)); //first

  for (let i = 0; i < each2DWithoutLine; ++i) {
    const l =
      " ".repeat(each2DWithoutLine - i) +
      "#" +
      symbol.repeat(each2DWithoutLine) +
      "#" +
      symbol.repeat(i) +
      "#";
    const rl =
      "#" +
      symbol.repeat(each2DWithoutLine) +
      "#" + symbol.repeat(i) + "#";

    result.push(l);
    reversedLines.push(rl);
  }
  reversedLines.reverse();

  result.push(
    "#".repeat(size) +
    symbol.repeat(each2DWithoutLine) +
    "#"); // middle
  result.push(...reversedLines);
  result.push("#".repeat(size) + "\n"); // last

  return result.join("\n");
}
