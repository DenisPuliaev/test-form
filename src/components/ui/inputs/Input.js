import React from "react";
import RadioButton from "./RadioButton";
import TextInput from "./TextInput";
import MaskInput from "./MaskInput";

export const Input = (props) => {
  const { type } = props;

  switch(type) {
    case "radio":
      return <RadioButton {...props} />;
    case "mask":
      return <MaskInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
};

export default Input;