export const camelCase = (str) => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const k = key(item);
    (result[k] = result[k] || []).push(item);
    return result;
  }, {});
};