import React from "react";
import TextInput from "../TextInput";
import { isNumeric } from '../../../../utils/numbers';

const MaskInput = ({ form, onBlur, ...props }) => {
  const handleBlur = (e) => {
    const { value, name } = props;
    if(value.length === 1 && isNumeric(value)) {
      form.setFieldValue(name, "0"+value);
    }
    onBlur(e);
  };

  return (
    <TextInput
      {...props}
      onBlur={handleBlur}
    />
  );
};

export default MaskInput;