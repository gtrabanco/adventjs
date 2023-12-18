function checkIsValidCopy(original, copy) {
  const validSymbols = "#+:. ";
  if (original.length !== copy.length) return false;

  const everyCb = (char, index) => {
    const oChar = original.charAt(index);
    const isValidSymbol =
      validSymbols.includes(char) &&
      validSymbols.indexOf(char) >= validSymbols.indexOf(oChar);
    return oChar === char || oChar.toLowerCase() === char || isValidSymbol;
  };

  return copy.split("").every(everyCb);
}
