import * as Yup from 'yup';
import {
  dayIsValid,
  monthIsValid,
  yearIsValid
} from '../../validation/date';

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
    month: Yup.string()
      .test('is-month', 'wrong month', (value) => {
        return monthIsValid(value);
      })
      .required('Required'),
    year: Yup.string()
      .test('is-year', 'wrong year', (value) => {
        return yearIsValid(value);
      })  
      .required('Required'),
  }),
  street: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
  zip: Yup.string().required('Required'),
  place: Yup.string().required('Required'),
});