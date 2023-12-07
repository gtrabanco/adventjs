// 260
function drawGift(size, symbol) {
  if (size < 2) {
    return "#\n";
  }

  const LINE_CHAR = "#";
  const each2DWithoutLine = Math.max(size - 2, 0);
  const maxLines = size * 2 - 1;
  const lineLine = `${" ".repeat(size - 1)}${LINE_CHAR.repeat(size)}`;
  const middleLine = `${LINE_CHAR.repeat(size)}${symbol.repeat(
    each2DWithoutLine
  )}${LINE_CHAR}`;
  const lastLine = `${LINE_CHAR.repeat(size)}\n`;

  const lines = [];
  const reversedLines = [];
  const result = [];

  for (let i = 0; i < each2DWithoutLine; ++i) {
    const l = `${" ".repeat(each2DWithoutLine - i)}${LINE_CHAR}${symbol.repeat(
      each2DWithoutLine
    )}${LINE_CHAR}${symbol.repeat(i)}${LINE_CHAR}`;
    const rl = `${LINE_CHAR}${symbol.repeat(
      each2DWithoutLine
    )}${LINE_CHAR}${symbol.repeat(i)}${LINE_CHAR}`;
    if (lines.length < maxLines) {
      lines.push(l);
      reversedLines.push(rl);
    }
  }

  result.push(lineLine);
  result.push(...lines);
  result.push(middleLine);
  result.push(...reversedLines.reverse());
  result.push(lastLine);

  return result.join("\n");
}

