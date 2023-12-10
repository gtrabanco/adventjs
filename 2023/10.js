// 150
function createChristmasTree(ornaments, height) {
  const m = ornaments.length;
  const tree = [];

  let n = 0;
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    const leaves = Array(i)
      .fill("")
      .map(() => ornaments.at(n++ % m)) // n++ % m => leave
      .join(" ");
    const branch = spaces + leaves;
    tree.push(branch);
  }

  const lastBranchMiddle = tree.at(-1).length / 2;
  const middle = parseInt(lastBranchMiddle);
  const steam = `${" ".repeat(middle)}|\n`;
  tree.push(steam);

  return tree.join("\n");
}
