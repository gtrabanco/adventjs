// 240
function decode(message) {
  const reverse = (str) => Array.from(str).reverse().join("");
  const reducer = (currentString = "", char) => {
    if (char === "(") {
      store.push(currentString);
      return "";
    } else if (char === ")") {
      currentString = store.pop() + reverse(currentString);
    } else {
      currentString += char;
    }

    return currentString;
  };
  const store = [];
  const chars = Array.from(message);
  const result = chars.reduce(reducer, "");

  return result;
}