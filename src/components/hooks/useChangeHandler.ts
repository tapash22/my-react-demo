import type React from "react";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

export function useChangeHandler<
  TFields extends Record<string, any>,
  TTouched extends Partial<Record<keyof TFields, boolean>>,
  TErrors extends Partial<Record<keyof TFields, string>>
>(
  form: TFields,
  setForm: React.Dispatch<React.SetStateAction<TFields>>,
  touched: TTouched,
  setErrors: React.Dispatch<React.SetStateAction<TErrors>>,
  validateField: (param: { name: keyof TFields; value: string }) => string,
  validateForm: (form: TFields) => Partial<Record<keyof TFields, string>>,
  setButtonEnable?: React.Dispatch<React.SetStateAction<boolean>>
) {
  return (e: React.ChangeEvent<InputElement>) => {
    const { name, value } = e.currentTarget;
    const fieldName = name as keyof TFields;

    const newForm = {
      ...form,
      [fieldName]: value,
    };

    setForm(newForm);

    // ✅ SAFE now
    if (touched[fieldName]) {
      const error = validateField({ name: fieldName, value });
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }

    if (setButtonEnable) {
      const allErrors = validateForm(newForm);
      setButtonEnable(Object.keys(allErrors).length === 0);
    }
  };
}
