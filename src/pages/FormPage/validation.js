import * as Yup from 'yup';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)

const dayIsValid = (d, m, y) => {
  console.log('day, month, year', d, m, y);
  
  if(d && m && y) {
    const date = dayjs(`${d} ${m} ${y}`, "DD MM YYYY");
    console.log('date', date.isValid())
    return date.isValid();
  } else if(d && m) {
    const date = dayjs(`${d} ${m}`, "DD MM");
    console.log('date', date.isValid())
    return date.isValid();
  }

  return true;
};

export const Schema = Yup.object().shape({
  gender: Yup.string().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  birth: Yup.object({
    day: Yup.string()
      .test('is-day', 'wrong day', (value, context) => {
        const { day, month, year } = context.parent;
        return dayIsValid(day, month, year);
      })
      .required('Required'),
    month: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
  }),
  street: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  place: Yup.string().required('Required'),
});