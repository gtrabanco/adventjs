// 280
function createChristmasTree(ornaments, height) {
  const numberOfLeaves = (height * (height + 1)) / 2;
  const allLeaves = ornaments.repeat(numberOfLeaves).split('');
  const tree = [];

  for(let branchNumber = 0; branchNumber < height; branchNumber++) {
    const start = (branchNumber * (branchNumber + 1)) / 2;
    const end = start + branchNumber + 1;
    const spaces = " ".repeat(height - (branchNumber + 1));
    const leaves = allLeaves.slice(start, end).join(" ");
    const branch = spaces + leaves;
    tree.push(branch);
  }

  const lastBranchMiddle = tree.at(-1).length / 2;
  const middle = lastBranchMiddle;
  const steam = " ".repeat(middle) + `|\n`;
  tree.push(steam);

  return tree.join("\n");
}