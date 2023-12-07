// 260
function drawGift(size, symbol) {
  if (size < 2) {
    return "#\n";
  }

  const LINE_CHAR = "#";
  const each2DWithoutLine = Math.max(size - 2, 0);
  const lineLine = `${" ".repeat(size - 1)}${LINE_CHAR.repeat(size)}`;
  const middleLine = `${LINE_CHAR.repeat(size)}${symbol.repeat(
    each2DWithoutLine
  )}${LINE_CHAR}`;
  const lastLine = `${LINE_CHAR.repeat(size)}\n`;
  const result = [];
  const drawLine = (_, line) =>
    `${" ".repeat(size - 2 - line)}${LINE_CHAR}${symbol.repeat(
      each2DWithoutLine
    )}${LINE_CHAR}${symbol.repeat(line)}${LINE_CHAR}`;
  const drawLineReverse = (_, line) =>
    `${LINE_CHAR}${symbol.repeat(each2DWithoutLine)}${LINE_CHAR}${symbol.repeat(
      line
    )}${LINE_CHAR}`;
  const lines = " ".repeat(size - 2).split("");
  const reversedLines = " ".repeat(size - 2).split("");

  result.push(lineLine);
  result.push(...lines.map(drawLine));
  result.push(middleLine);
  result.push(...reversedLines.map(drawLineReverse).reverse());
  result.push(lastLine);

  return result.join("\n");
}
