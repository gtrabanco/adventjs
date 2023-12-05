// 160
function cyberReindeer(road, time) {
  const BLOCKED_BARRIER = '|';
  const OPEN_BARRIER = '*';
  const ROAD = '.';
  const REINDEER = 'S';
  const result = [];
  let currentRoad = road.replace(REINDEER,ROAD);
  let index = road.indexOf(REINDEER);

  for(let step = 0; step < time; step++) {
    if(step === 5) {
      currentRoad = currentRoad.replaceAll(BLOCKED_BARRIER, OPEN_BARRIER);
    }
    
    const CURRENT_CHAR =  currentRoad[index];
    if(CURRENT_CHAR === BLOCKED_BARRIER) {
      --index;
    }
    ++index;

    let nowRoad = currentRoad.substring(0, index - 1);
    nowRoad += REINDEER;
    nowRoad += currentRoad.substring(index)
    result.push(nowRoad);

  }
  return result;
}