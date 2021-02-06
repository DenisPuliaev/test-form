import React from "react";
import TextInput from "../TextInput";

const prependZero = str => ("0"+str).substr(-2);

const MaskInput = ({ form, onBlur, ...props }) => {
  const handleBlur = (e) => {
    const { value, name } = props;
    form.setFieldValue(name, prependZero(value));
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