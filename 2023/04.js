// 200
function decode(message) {
  const chars = Array.from(message);
  const reverse = (str = "") => Array.from(str).reverse().join("");
  const reducer = (tmp = [], char) => {
    const index = tmp.length - 1;
    if (char === "(") {
      tmp[tmp.length] = tmp[tmp.length] || "";
    }
    
    if (char === ")") {
      const current = tmp.pop();
      const previous = tmp[index - 1] || "";
      tmp[index - 1] = previous + reverse(current);
    }

    if (char !== "(" && char !== ")") {
      tmp[index] += char;
    }

    return tmp;
  };

  const parts = chars.reduce(reducer, [""]);
  const solution = parts.pop();

  return solution;
}
