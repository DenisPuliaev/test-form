export const isNumeric = (num) => {
  return !isNaN(num)
}

export const numberInRange = (day, range) => {
  const [start, end] = range;
  return day >= parseInt(start) && day <= parseInt(end);
}