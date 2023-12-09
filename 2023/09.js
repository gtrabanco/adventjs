// 180
function adjustLights(lights) {
  const GREEN_LIGHT = "🟢";
  const RED_LIGHT = "🔴";

  const generateStripe = (even, odd, length) =>
    Array(length)
      .fill("")
      .map((l, i) => (i % 2 === 0 ? even : odd));

  const countArraysDifference = ({ from, to }) =>
    from.reduce(
      (counter, element, index) =>
        element === to[index] ? counter : ++counter,
      0
    );

  const numberOfLights = lights.length;
  const wellDoneStripeGreen = generateStripe(
    GREEN_LIGHT,
    RED_LIGHT,
    numberOfLights
  );
  const wellDoneStripeRed = generateStripe(
    RED_LIGHT,
    GREEN_LIGHT,
    numberOfLights
  );

  const greenDistance = countArraysDifference({
    from: wellDoneStripeGreen,
    to: lights,
  });
  const redDistance = countArraysDifference({
    from: wellDoneStripeRed,
    to: lights,
  });

  const steps = Math.min(greenDistance, redDistance);

  return steps;
}
