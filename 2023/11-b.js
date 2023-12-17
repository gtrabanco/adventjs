function getIndexsForPalindrome(word) {
  const wLength = word.length;
  const rWord = word.split('').reverse().join('');
  if(word === rWord) {
    return []
  }
  
  for(let x = 0; x < wLength; x++) {
    for(let y = x+1; y < wLength; y++) {
      const w = word.split('');
      w[x] = word.charAt(x);
      w[y] = word.charAt(y);

      const f = w.join('');
      const r = w.reverse().join('');
      if(f === r) {
        return [x, y]
      }
    }
  }

  return null
}