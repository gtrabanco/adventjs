// 360
function maxDistance(movements) {
  const chars = movements.split("").filter((c) => c !== "*");
  const odd = movements.length - chars.length;
  const charCount = (counter, char) =>
    char === ">" ? counter + 1 : counter - 1;
  const steps = chars.reduce(charCount, 0);

  return Math.abs(steps) + odd;
}
