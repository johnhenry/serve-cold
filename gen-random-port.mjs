export const genPort = (min = 2 ** 10, max = 2 ** 16) =>
  Math.floor(Math.random() * (max - min - 1) + min);
export default genPort;
