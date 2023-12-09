// 260
function organizeGifts(gifts) {
  const { solution } = gifts.split("").reduce(
    (store, present) => {
      const isPresent = isNaN(+present);
      if (isPresent) {
        const number = +store.next;
        store.solution += `${`[${present}]`.repeat(
          number / 50
        )}${`{${present}}`.repeat((number % 50) / 10)}${`(${present.repeat(
          number % 10
        )})`.replace("()", "")}`;
        store.next = "";
        return store;
      }

      store.next += present;

      return store;
    },
    { next: "", solution: "" }
  );

  return solution;
}
