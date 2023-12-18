function calculateTime(deliveries) {
  const MAX_SECONDS = 25200;
  const deliveriesSplittedTime = deliveries.map((d) => d.split(":"));
  const etaSeconds = deliveriesSplittedTime.reduce(
    (acc, [hours, minutes, seconds]) =>
      acc + +hours * 3600 + +minutes * 60 + +seconds,
    0
  );

  const totalETASeconds = MAX_SECONDS - etaSeconds;

  const calculatedHours = totalETASeconds / 3600;
  const oddMinutes = totalETASeconds % 3600;
  const calculatedMinutes = oddMinutes / 60;
  const calculatedSeconds = oddMinutes % 60;

  const truncHours = ~~calculatedHours;
  const absHours = (truncHours ** 2) ** 0.5;
  const hours = absHours.toString().padStart(2, "0");

  const truncMinutes = ~~calculatedMinutes;
  const absMinutes = (truncMinutes ** 2) ** 0.5;
  const minutes = absMinutes.toString().padStart(2, "0");

  const truncSeconds = ~~calculatedSeconds;
  const absSeconds = (truncSeconds ** 2) ** 0.5;
  const seconds = absSeconds.toString().padStart(2, "0");

  let sign = "";
  if (totalETASeconds > 0) {
    sign = "-";
  }

  return sign + hours + ":" + minutes + ":" + seconds;
}
