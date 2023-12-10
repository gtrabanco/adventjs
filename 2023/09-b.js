// This is failing... Not sure why because only fails one secret test
function adjustLights(lights) {
  const { counter } = lights.reduce(
    (store, light) => {
      const compare = light === store.prevLight;
      return {
        counter: store.counter + +compare,
        prevLight: compare || light,
      };
    },
    { prevLight: undefined, counter: 0 }
  );

  return counter;
}
