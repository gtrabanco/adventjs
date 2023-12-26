// With a little spam I am sure this can get > 1000 ops/s
function transformTree(tree) {
  const first = tree.shift() ?? null;
  if (first === null) {
    return null;
  }

  let n = 0;
  const leftNums = [];
  const rightNums = [];

  for (let i = 0; i < tree.length; i++) {
    n = n * 2 + 1;
    const elements = Math.trunc(n / 2) + 1;
    const leftEndRightStart = i + elements;
    const end = i + 2 * elements;
    leftNums.push(...tree.slice(i, leftEndRightStart));
    rightNums.push(...tree.slice(leftEndRightStart, end));
    i = end - 1;
  }

  const left = transformTree(leftNums);
  const right = transformTree(rightNums);

  return {
    value: first,
    left,
    right,
  };
}
