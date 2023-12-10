// 340
function findNaughtyStep(original, modified) {
  if (original === modified) {
    // Without this if 240
    return "";
  }

  const originalLen = original.length;
  const modifiedLen = modified.length;

  for (let i = 0; i < modified.length; i++) {
    const o = original[i];
    const m = modified[i];

    if (o !== m && originalLen > modifiedLen) {
      return o;
    }

    if (m !== o) {
      return m;
    }
  }

  return "";
}
