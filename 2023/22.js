// Sometimes it fails but I do not know where. There is still one missing secret test
function compile(code) {
  const getEndOfChunkByCloseChar = (chunk, open, close) => {
    let _i = 1;
    const chars = chunk.split("");
    for (const idx in chars) {
      const c = chars[idx];
      if (c === open) {
        ++_i;
      }

      if (c === close) {
        --_i;
      }

      if (_i === 0) {
        return idx;
      }
    }

    return -1;
  };

  let counter = 0;
  for (let i = 0; i < code.length; i++) {
    const char = code.charAt(i);
    if (char === "¿") {
      const tmpChunk = code.substring(i + 1);
      const endIndexChunk = getEndOfChunkByCloseChar(tmpChunk, "¿", "?");
      const chunk = tmpChunk.substring(0, endIndexChunk);
      i += chunk.length;
      if (counter > 0) {
        counter = compile("+".repeat(counter) + chunk);
      }
      continue;
    }

    if (char === "%") {
      const tmpChunk = code.substring(i + 1);
      const endIndexChunk = getEndOfChunkByCloseChar(tmpChunk, "%", "<");
      if (endIndexChunk === -1) {
        continue;
      }
      const chunk = tmpChunk.substring(0, endIndexChunk);
      i += chunk.length;
      if (counter > 0) {
        counter = compile("+".repeat(counter) + chunk);
        counter = compile("+".repeat(counter) + chunk);
      }
      continue;
    }

    if (char === "*") {
      counter *= 2;
      continue;
    }

    if (char === "+") {
      ++counter;
      continue;
    }

    if (char === "-") {
      --counter;
      continue;
    }
  }

  return counter;
}
