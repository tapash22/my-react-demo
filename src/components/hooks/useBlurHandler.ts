import type React from "react";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

export function useBlurHandler<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TFields extends Record<string, any>,
  TTouched extends Record<string, boolean>,
  TErrors extends Record<string, string>
>(
  setTouched: React.Dispatch<React.SetStateAction<TTouched>>,
  setErrors: React.Dispatch<React.SetStateAction<TErrors>>,
  validateField: (param: { name: keyof TFields; value: string }) => string
) {
  return (e: React.FocusEvent<InputElement>) => {
    const { name, value } = e.currentTarget;
    const fieldName = name as keyof TFields;

    setTouched((prev) => ({
      ...prev,
      [fieldName]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [fieldName]: validateField({ name: fieldName, value }),
    }));
  };
}
