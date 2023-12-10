function adjustLights(lights) {
  let [even, odd] = [0, 0]; // [even, odd]

  for (let i in lights) {
    const isOdd = +(lights[i] === lights[0]);
    const isEven = 1 - isOdd;
    const remainder = i % 2;

    even += remainder * isOdd + (1 - remainder) * isEven;
    odd += remainder * isEven + (1 - remainder) * isOdd;
  }

  return Math.min(even, odd);
}

/**
 * This has its explanaition on Maths
 * You will see it if you divide the problem on Matix of R2 space.
 */

// [0, 1, 0, 1, 1, 1, 0, 0] = [
//   [0, 1],
//   [0, 1],
//   [1, 1],
//   [0, 0]
// ]

// We want out bidimensional matrix to be all equal
