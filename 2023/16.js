function transformTree(tree) {
  const [first = null] = tree
  if (first === null) {
    return null;
  }

  const iterateTree = tree.slice(1);
  let n = 0;
  const left = [];
  const right = [];

  for (let i = 0; i < iterateTree.length; i++) {
    n = n * 2 + 1;
    const elements = Math.trunc(n / 2) + 1;
    const leftEndRightStart = i + elements;
    const end = i + 2 * elements;
    left.push(...iterateTree.slice(i, leftEndRightStart));
    right.push(...iterateTree.slice(leftEndRightStart, end));
    i = end - 1;
  }

  return {
    value: tree[0],
    left: transformTree(left),
    right: transformTree(right),
  };
}