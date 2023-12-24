function organizeChristmasDinner(dishes) {
  const dishesObject = dishes.reduce((store, [dish, ...ingredients]) => {
    for (const i of ingredients) {
      store[i] ??= [];
      store[i].push(dish);
    }
    return store;
  }, {});
  const duplicatedIngredientsPlatesArray = Object.entries(dishesObject).filter(
    ([_, value]) => value.length > 1
  );

  const duplicatedPlatesFormattedArraySorted =
    duplicatedIngredientsPlatesArray.map(([dish, ingredients]) => [
      dish,
      ...ingredients.sort(),
    ]);
  return duplicatedPlatesFormattedArraySorted.sort();
}
