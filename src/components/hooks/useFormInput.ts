import { useState } from "react";

function useFormInput<T>(newValue: T) {
  const [value, setValue] = useState(newValue);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  async function validate(validateFn: (value: T) => Promise<string[]>) {
    const err = await validateFn(value);
    // If it has errors
    setErrorMessages(err);
    return err;
  }

  return { value, setValue, errorMessages, validate };
}

export default useFormInput;
