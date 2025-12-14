import { useEffect, useRef, useState } from "react";
import {
  validateLoginForm,
  validateLoginField,
  type Errors,
  type LoginFields,
} from "../validation/validators";
import type { ItemTouched } from "./ItemForm";
import { type User } from "../hooks/types/CurrentUser";
import { useBlurHandler } from "../hooks/useBlurHandler";
import { useChangeHandler } from "../hooks/useChangeHandler";

interface LoginFormProps {
  onFormChange: (data: User) => void;
}

export function LoginForm({ onFormChange }: LoginFormProps) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Errors<LoginFields>>({});
  const [form, setForm] = useState<LoginFields>({ email: "", password: "" });
  const [buttonEnable, setButtonEnable] = useState<boolean>(false);
  const [touched, setTouched] = useState<ItemTouched>({});

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleChange = useChangeHandler<
    LoginFields,
    ItemTouched,
    Errors<LoginFields>
  >(
    form,
    setForm,
    touched,
    setErrors,
    validateLoginField,
    validateLoginForm,
    setButtonEnable
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateLoginForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onFormChange(form);
    }
  };

  // When leaving a field (FIRST time touches)
  const handleBlur = useBlurHandler<
    LoginFields,
    ItemTouched,
    Errors<LoginFields>
  >(setTouched, setErrors, validateLoginField);

  return (
    <div className="block p-10 rounded-xl drop-shadow-2xl bg-white space-y-5">
      <p className="text-xl font-bold tracking-wide p-3">Login Form</p>
      <form onSubmit={handleSubmit} className="flex flex-col  gap-5 w-100">
        <div className="block w-full">
          <input
            ref={emailRef}
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="input-field"
          />
          {touched.email && errors.email && (
            <p className="text-red-500 text-sm w-100 flex justify-start p-2 ">
              {errors.email}
            </p>
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
            className="input-field"
          />
          {touched.password && errors.password && (
            <p className="text-red-500 text-sm w-100 flex justify-start p-2">
              {errors.password}
            </p>
          )}
        </div>
        <div className="w-100">
          <button
            type="submit"
            disabled={!buttonEnable}
            className={`
              w-100
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
        </div>
      </form>
    </div>
  );
}
