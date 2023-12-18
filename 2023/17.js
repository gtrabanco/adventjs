function optimizeIntervals(intervals) {
  const sort = ([x0], [x1]) => x0 - x1;
  intervals.sort(sort);

  const simplified = intervals.reduce((s, [x1, y1]) => {
    const sIdx = s.findIndex(
      ([x0, y0]) => (x1 >= x0 && x1 <= y0) || (y1 >= x0 && y1 <= y0)
    );

    if (sIdx >= 0) {
      const [x0, y0] = s[sIdx];
      s[sIdx] = [Math.min(x0, x1), Math.max(y0, y1)];
    } else {
      s.push([x1, y1]);
    }

    return s;
  }, []);

  return simplified.sort(([x0], [x1]) => x0 - x1);
}
