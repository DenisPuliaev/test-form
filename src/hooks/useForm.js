import { useState, useEffect } from "react";

const useForm = (onSubmit, validate, validateOnChange) => {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);
  const [errors, setFormErrors] = useState({});

  useEffect(() => {
    if (validateOnChange && validated) {
      setFormErrors(validate(data));
    }
  }, [validateOnChange, data]);

  const isValid = (field) => {
    return validated && !errors[field];
  }

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const resetFormState = () => {
    setData({});
    setFormErrors({});
    setValidated(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(data);

    if (Object.keys(errors).length === 0) {
      onSubmit(data);
      resetFormState();
    } else {
      setFormErrors(errors);
      setValidated(true);
    }
  };

  return {
    data,
    errors,
    onChange,
    isValid,
    handleSubmit,
    resetFormState,
  };
};

export default useForm;