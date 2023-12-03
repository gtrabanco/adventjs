function findNaughtyStep(original, modified) {
  const findCondition = (c, index) => c !== original[index];
  const modifiedAsArray = Array.from(modified);
  const invalidCharIndex = modifiedAsArray.findIndex(findCondition);

  if (invalidCharIndex < 0 || original === modified) {
    return "";
  }

  if (modified.length > original.length) {
    return modified[invalidCharIndex];
  }

  return original[invalidCharIndex];
}
