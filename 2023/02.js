// 270
function manufacture(gifts, materials) {
  const craftable = c => materials.includes(c);
  const isGiftCraftable = gift => Array.from(gift).every(craftable);
  return gifts.filter(isGiftCraftable);
}