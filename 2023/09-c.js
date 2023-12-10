// 180
function adjustLights(lights) {
  const average = lights.length / 2;
  const max = lights.length - average;
  const count = (char) => lights.reduce((count, c) => c === char ? ++count : count, 0);
  const greens = count('🟢');
  const reds = count('🔴');

  if(greens > reds) {
    return (max - greens) + (average - reds);
  }

  return (max - reds) + (average - greens);
}
