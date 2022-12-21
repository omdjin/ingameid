// WARNING: This is not a drop in replacement solution and
// it might not work for some edge cases. Test your code!
const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

export default chunk;
