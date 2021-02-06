import React from 'react';
import { Field } from 'formik';
import Input from '../inputs';

const isRadio = type => type === 'radio';

function FormikInput({ name, value, ...rest }) {
  return (
    <Field name={name}>
      {({ field, form, meta }) => (
          <Input
            {...rest}
            {...field}
            form={form}
            value={isRadio(rest.type) ? value : field.value}
            invalid={meta.touched && meta.error}
          />
      )}
    </Field>
  );
}

export default FormikInput;
