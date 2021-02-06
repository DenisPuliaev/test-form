import dayjs from 'dayjs';
import { isNumeric, numberInRange } from '../utils/numbers';

const daysInMonth = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

export const yearIsValid = (y) => {
  const year = parseInt(y);
  const range = [1900, new Date().getFullYear()];
  return isNumeric(y) && numberInRange(year, range);
};

export const monthIsValid = (m) => {
  const month = parseInt(m);
  const range = [1, 12];
  return (""+m).length === 2 && isNumeric(m) && numberInRange(month, range);
};

export const dayIsValid = (d, m, y) => {  
  let isValid = false;

  const day = parseInt(d);
  const month = parseInt(m);
  const year = parseInt(y);

  console.log('d, m, y', day, month, year);

  if(isNumeric(d) && monthIsValid(m) && yearIsValid(y)) {
    console.log('inside')
    const date = dayjs(`${d} ${m} ${y}`, "DD MM YYYY", true);
    isValid = date.isValid();
  } else if(isNumeric(d) && monthIsValid(m)) {
    const range = [1, daysInMonth[month-1]];
    isValid = numberInRange(day, range);
  } else if(isNumeric(d)) {
    isValid = numberInRange(day, [1, 31]);
  }

  return isValid;
};