import { useEffect, useRef, useState } from "react";
import {
  validateLoginForm,
  validateLoginField,
  type LoginErrors,
  type LoginFields,
} from "../validation/validators";
import type { ItemTouched } from "./ItemForm";

export function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<LoginErrors>({});
  const [form, setForm] = useState<LoginFields>({ email: "", password: "" });
  const [buttonEnable, setButtonEnable] = useState<boolean>(false);
  const [touched, setTouched] = useState<ItemTouched>({});

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as {
      name: keyof LoginFields;
      value: string;
    };

    const newForm = { ...form, [name]: value };
    setForm(newForm);

    if (touched[name]) {
      const error = validateLoginField({ name, value });
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    // Enable/disable button based on full form validity
    const allErrors = validateLoginForm(newForm);
    const isValid = Object.keys(allErrors).length === 0;
    setButtonEnable(isValid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateLoginForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(form);
    }
  };

  // When leaving a field (FIRST time touches)
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as {
      name: keyof LoginFields;
      value: string;
    };

    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateLoginField({ name, value });
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <>
      <p>Login Form</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <div className="block w-full">
          <input
            ref={emailRef}
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border p-2 rounded"
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="block w-full">
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border p-2 rounded"
          />
          {touched.password && errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={!buttonEnable}
          className={`
              px-5 py-2 rounded-lg font-medium text-lg text-white
              bg-blue-600
              disabled:bg-blue-400
              disabled:text-black
              disabled:opacity-50
              disabled:cursor-default
              hover:enabled:bg-blue-700
            `}
        >
          Login
        </button>
      </form>
    </>
  );
}
