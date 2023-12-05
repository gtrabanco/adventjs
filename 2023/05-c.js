// 170
function cyberReindeer(road, time) {
  const BLOCKED_BARRIER = "|";
  const OPEN_BARRIER = "*";
  const ROAD = ".";
  const REINDEER = "S";
  let gps = road.indexOf(REINDEER);
  const STEP_TO_UNLOCK = 5;
  const emptyRoad = road.replace(REINDEER, ROAD);
  const unlockedRoad = emptyRoad.replaceAll(BLOCKED_BARRIER, OPEN_BARRIER);
  const roads = [];
  roads.length = time;
  roads.fill(emptyRoad);
  roads.fill(unlockedRoad, STEP_TO_UNLOCK, time);

  const getRoad = (r) => {
    const currentChar = r.charAt(gps);
    gps += currentChar !== BLOCKED_BARRIER ? 1 : 0;

    const nowRoad = `${r.substring(0, gps - 1)}${REINDEER}${r.substring(gps)}`;

    return nowRoad;
  };

  return roads.map(getRoad);
}
