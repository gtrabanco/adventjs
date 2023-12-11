// 170
function createChristmasTree(ornaments, height) {
  const numberOfOrnaments = ornaments.length;
  const numberOfLeaves = (height * (height + 1)) / 2;
  const allLeaves = " "
    .repeat(numberOfLeaves)
    .split("")
    .map((_, i) => ornaments.at(i % numberOfOrnaments));

  const tree = " "
    .repeat(height)
    .split("")
    .map((_, branchNumber) => {
      const start = (branchNumber * (branchNumber + 1)) / 2;
      const end = start + branchNumber + 1;
      const spaces = " ".repeat(height - branchNumber - 1);
      const leaves = allLeaves.slice(start, end).join(" ");
      const branch = spaces + leaves;

      return branch;
    });

  const lastBranchMiddle = tree.at(-1).length / 2;
  const middle = lastBranchMiddle;
  const steam = " ".repeat(middle) + `|\n`;
  tree.push(steam);

  return tree.join("\n");
}
