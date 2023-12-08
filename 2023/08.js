//180
function organizeGifts(gifts) {
  const pallet = (present, n) => `[${present}]`.repeat(n / 50);
  const box = (present, n) => `{${present}}`.repeat((n % 50) / 10);
  const bag = (present, n) => (n % 10 > 0 ? `(${present.repeat(n % 10)})` : "");
  const organize = (present, number) => {
    const pallets = pallet(present, number);
    const boxes = box(present, number);
    const bags = bag(present, number);

    return `${pallets}${boxes}${bags}`;
  };

  let result = "";
  let n = "";
  for (let char of gifts.split("")) {
    if (isNaN(+char)) {
      const numberOfPresents = +n;
      n = "";
      result += organize(char, numberOfPresents);
      continue;
    }

    n += char;
  }

  return result;
}