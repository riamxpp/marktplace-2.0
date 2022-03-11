import { useState } from "react";

const useForm = () => {
  const [error, setError] = useState(null);

  function validate(value) {
    if (value.length === 0) {
      setError("Preencha o campo com valor válido");
    }
  }

  return {
    validate,
    error,
  };
};

export default useForm;
