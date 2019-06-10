export default (feed = []) => {
  let removed = [];
  for (let curr of feed)
    if (!removed.includes(curr)) removed = [...removed, curr];
  return removed;
};
