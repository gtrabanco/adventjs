function manufacture(gifts, materials) {
  const craftable = c => materials.indexOf(c);
  const isGiftCraftable = gift => Array.from(gift).every(craftable);
  return gifts.filter(isGiftCraftable);
}