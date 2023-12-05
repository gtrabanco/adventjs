// 160
function cyberReindeer(road, time) {
  const BLOCKED_BARRIER = "|";
  const OPEN_BARRIER = "*";
  const ROAD = ".";
  const REINDEER = "S";
  let currentRoad = road.replace(REINDEER, ROAD);
  let index = road.indexOf(REINDEER);

  return Array.from({ length: time }).map((_, step) => {
    if (step === 5) {
      currentRoad = currentRoad.replaceAll(BLOCKED_BARRIER, OPEN_BARRIER);
    }

    const CURRENT_CHAR = currentRoad[index];
    if (CURRENT_CHAR === BLOCKED_BARRIER) {
      --index;
    }
    ++index;

    let nowRoad = currentRoad.substring(0, index - 1);
    nowRoad += REINDEER;
    nowRoad += currentRoad.substring(index);

    return nowRoad;
  });
}
