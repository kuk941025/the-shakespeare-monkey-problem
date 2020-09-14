export const map = (value, startValue, endValue, startTarget, endTarget) => {
  const updatedValue = value - startValue;
  const zeroedValue = endValue - startValue;
  const zeroedTarget = endTarget - startTarget;

  return updatedValue / zeroedValue * zeroedTarget;
};
