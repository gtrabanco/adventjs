// 160
function createChristmasTree(ornaments, height) {
  const numberOfOrnaments = ornaments.length;
  const tree = [];
  let countLeaves = 0;

  for (let branchNumber = 1; branchNumber <= height; branchNumber++) {
    const spaces = height - branchNumber;
    const leaves = [];
    for (let leaveNumber = 0; leaveNumber < branchNumber; leaveNumber++) {
      const currentLeaveOrnament = countLeaves++ % numberOfOrnaments;
      const leave = ornaments.charAt(currentLeaveOrnament);
      leaves.push(leave);
    }
    const branch = " ".repeat(spaces) + leaves.join(" ");
    tree.push(branch);
  }

  const lastBranchMiddle = tree.at(-1).length / 2;
  const middle = parseInt(`${lastBranchMiddle}`);
  const steam = `${" ".repeat(middle)}|\n`;
  tree.push(steam);

  return tree.join("\n");
}
