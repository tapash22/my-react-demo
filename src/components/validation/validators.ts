import type { Item } from "../../reducer/itemreducer";

// Errors type (works for any form)
export type Errors<T> = Partial<Record<keyof T, string>>;

export type FieldValuePair<T> = {
  name: keyof T;
  value: T[keyof T];
};

export interface LoginFields {
  email: string;
  password: string;
}

// Generic field validator type
export type ValidateFieldFn<T> = (field: FieldValuePair<T>) => string;

// Generic form validator type
export type ValidateFormFn<T> = (data: T) => Errors<T>;

// ===== Login Validators =====

export const validateLoginField: ValidateFieldFn<LoginFields> = ({
  name,
  value,
}) => {
  const strValue = value.trim();

  switch (name) {
    case "email":
      if (!strValue) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(strValue)) return "Invalid email";
      break;
    case "password":
      if (!strValue) return "Password is required";
      if (strValue.length < 6) return "Password must be at least 6 characters";
      break;
    default:
      return "";
  }
  return "";
};

// Validate full login form
export const validateLoginForm: ValidateFormFn<LoginFields> = (data) => {
  const errors: Errors<LoginFields> = {};

  (Object.keys(data) as (keyof LoginFields)[]).forEach((key) => {
    const error = validateLoginField({ name: key, value: data[key] });
    if (error) errors[key] = error;
  });

  return errors;
};

// ===== Item Validators =====

// Validate entire form field
export const validateField: ValidateFieldFn<Item> = ({ name, value }) => {
  const strValue = String(value);
  switch (name) {
    case "name":
      if (!strValue.trim()) return "Name is required";
      if (strValue.trim().split(" ").length < 2)
        return "Full name (first & last) is required";
      break;
    case "age":
      if (!strValue.trim()) return "Age is required";
      if (isNaN(Number(value))) return "Age must be a number";
      break;
    case "phone":
      if (!strValue.trim()) return "Phone number is required";
      // Bangladesh phone regex: starts with 01, total 11 digits
      if (!/^01[3-9][0-9]{8}$/.test(strValue))
        return "Phone must be a valid Bangladeshi number (11 digits)";
      break;
    // if (!/^[0-9]{10,15}$/.test(value)) return "Phone must be 10–15 digits";
    // break;
    case "email":
      if (!strValue.trim()) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(strValue)) return "Invalid email";
      break;
    case "address":
      if (!strValue.trim()) return "Address is required";
      break;
    default:
      return "";
  }
  return "";
};

// Validate entire form
export const validateForm: ValidateFormFn<Item> = (data) => {
  const errors: Errors<Item> = {};

  (Object.keys(data) as (keyof Item)[]).forEach((key) => {
    const error = validateField({ name: key, value: data[key] });
    if (error) errors[key] = error;
  });
  return errors;
};
