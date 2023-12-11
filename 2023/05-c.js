// 180
function cyberReindeer(road, time) {
  const BLOCKED_BARRIER = "|";
  const OPEN_BARRIER = "*";
  const ROAD = ".";
  const REINDEER = "S";
  let gps = road.indexOf(REINDEER);
  const STEP_TO_UNLOCK = 5;
  const emptyRoad = road.replace(REINDEER, ROAD);
  const unlockedRoad = emptyRoad.replaceAll(BLOCKED_BARRIER, OPEN_BARRIER);
  const roads = (emptyRoad + "=").repeat(time).split("=", time);
  roads.fill(unlockedRoad, STEP_TO_UNLOCK, time);
  const result = []

  for (const r of roads) {
    const currentChar = r.charAt(gps);
    if(currentChar !== BLOCKED_BARRIER) {
      gps = gps + 1;
    }
    result.push(`${r.substring(0, gps - 1)}${REINDEER}${r.substring(gps)}`);
  }

  return result;
}
