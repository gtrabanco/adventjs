// 260
function drawGift(size, symbol) {
  if (size < 2) {
    return "#\n";
  }

  const maxSymbolLineSize = size - 2;
  const lineSize = "#".repeat(size);
  const firstLine = " ".repeat(size - 1) + lineSize;
  const middleLine = lineSize + symbol.repeat(maxSymbolLineSize) + "#";
  const lastLine = lineSize + "\n";
  const line = (_, i) =>
    " ".repeat(maxSymbolLineSize - i) +
    "#" +
    symbol.repeat(maxSymbolLineSize) +
    "#" +
    symbol.repeat(i) +
    "#";

  const lines = " ".repeat(maxSymbolLineSize).split("").map(line);
  const reversedLines = lines.map((l) => l.trim()).reverse();
  const result = [firstLine, ...lines, middleLine, ...reversedLines, lastLine];

  return result.join("\n");
}
