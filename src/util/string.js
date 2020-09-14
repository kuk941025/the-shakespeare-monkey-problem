const max = 122;
const min = 63;
export const newChar = () => {
  let ascii = Math.floor(Math.random() * (max - min + 1)) + min;
  if (ascii === 63) ascii = 32;
  if (ascii === 64) ascii = 46;

  return String.fromCharCode(ascii);
};
