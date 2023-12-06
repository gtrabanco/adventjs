// 250
function decode(message) {
  const reverse = (str) => str.split('').reverse().join("");
  const store = [];
  let result = "";

  for (const char of message) {
    if (char === "(") {
      store.push(result);
      result = "";
    } else if (char === ")") {
      result = store.pop() + reverse(result);
    } else {
      result += char;
    }
  }

  return result;
}
