function getIndexsForPalindrome(word) {
  const wLength = word.length;
  const wordArray = word.split('');
  const rWord = word.split('').reverse().join('');
  if(word === rWord) {
    return []
  }
  
  for(let x = 0; x < wLength; x++) {
    for(let y = 0; y < wLength; y++) {
      if(x === y) {
        continue;
      }
      const w = Array.from(wordArray);
      w[y] = wordArray[x];
      w[x] = wordArray[y];
      const nowWord = w.join('');
      if(nowWord === w.reverse('').join('')) {
        return [x, y]
      }
    }
  }

  return null
}