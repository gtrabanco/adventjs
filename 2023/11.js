function getIndexsForPalindrome(word) {
  const wLength = word.length;
  const rWord = word.split('').reverse().join('');
  if(word === rWord) {
    return []
  }
  
  for(let x = 0; x < wLength; x++) {
    for(let y = 0; y < wLength; y++) {
      const w = word.split('');
      w[x] = word.charAt(y);
      w[y] = word.charAt(x);

      const f = w.join('');
      const r = w.reverse().join('');
      if(x !== y && f === r) {
        return [x, y]
      }
    }
  }

  return null
}