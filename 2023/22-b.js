// Got the idea from will repository: https://github.com/iswilljr/adventjs/blob/master/2023/challenge-22/challenge-22.ts
// to make mine more simpler
function compile(code) {
  let counter = 0;
  let chunkIndex = -1;
  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);
    if(char === '*') {
      counter *= 2;
    } else if(char === '+') {
      ++counter;
    } else if(char === '-') {
      --counter;
    } else if(char === '%') {
      chunkIndex = i;
    } else if(char === '<' && chunkIndex !== -1) {
      i = chunkIndex;
      chunkIndex = -1;
    } else if(char === '¿' && counter < 1) {
      i = code.indexOf('?', i);
    }
  }

  return counter;
}
