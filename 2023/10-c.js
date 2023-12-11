// 80
function createChristmasTree(ornaments, height) {
  const numberOfOrnaments = ornaments.length;
  const gauss = (n) => (n * (n + 1)) / 2;
  const gaussOrnament = (branchNumber, ornamentNumber) => {
    const seq = gauss(branchNumber) + ornamentNumber;
    const n = seq % numberOfOrnaments;
    return ornaments.charAt(n);
  };
  const branchLeaves = (branchNumber) =>
    " "
      .repeat(branchNumber)
      .split("")
      .map((_, leaveNumber) => gaussOrnament(branchNumber - 1, leaveNumber))
      .join(" ");

  const tree = " "
    .repeat(height)
    .split("")
    .map((_, branchNumber) => {
      const numberOfSpaces = height - branchNumber - 1;
      const spaces = " ".repeat(numberOfSpaces);
      const leaves = branchLeaves(branchNumber + 1);
      return spaces + leaves;
    });

  const lastBranchMiddle = tree.at(-1).length / 2;
  const middle = parseInt(`${lastBranchMiddle}`);
  const steam = `${" ".repeat(middle)}|\n`;
  tree.push(steam);

  return tree.join("\n");
}
