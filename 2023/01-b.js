// 340
function findFirstRepeated(gifts) {
  const isGiftSameIndex = (gift, index) => gifts.indexOf(gift) !== index;
  const repeated = gifts.find(isGiftSameIndex);
  return repeated ?? -1;
}