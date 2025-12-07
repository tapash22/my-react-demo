import React, { useState, useEffect } from "react";
import { type Item } from "../../reducer/itemreducer";

type ItemErrors = {
  name?: string;
  age?: string;
  phone?: string;
  email?: string;
  address?: string;
};

type ItemTouched = {
  name?: boolean;
  age?: boolean;
  phone?: boolean;
  email?: boolean;
  address?: boolean;
};

interface ItemFormProps {
  editItem?: Item;
  onFormChange: (data: Item, isValid: boolean) => void;
}

function ItemManager({ editItem, onFormChange }: ItemFormProps) {
  const EMPTY_FORM: Item = {
    id: 0,
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  };
  const [form, setForm] = useState<Item>(editItem || EMPTY_FORM);
  const [errors, setErrors] = useState<ItemErrors>({});
  const [touched, setTouched] = useState<ItemTouched>({});

  useEffect(() => {
    setForm(editItem || EMPTY_FORM);
    setTouched({});
    setErrors({});
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem]);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        break;
      case "age":
        if (!value.trim()) return "Age is required";
        if (isNaN(Number(value))) return "Age must be a number";
        break;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[0-9]{10,15}$/.test(value)) return "Phone must be 10–15 digits";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email";
        break;
      case "address":
        if (!value.trim()) return "Address is required";
        break;
      default:
        return "";
    }
    return "";
  };

  // validate full form
  const validateForm = (data: Item) => {
    const newErrors: ItemErrors = {};

    (Object.keys(data) as (keyof Item)[]).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as { name: keyof Item; value: string };

    const newForm = { ...form, [name]: value };
    setForm(newForm);

    // Only show error if the field is touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    const valid = validateForm(newForm);
    onFormChange(newForm, valid);
  };

  // When leaving a field (FIRST time touches)
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as { name: keyof Item; value: string };

    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  return (
    <>
      {/* handle form */}
      <div className=" w-full h-full drop-shadow-black rounded-xl">
        <form className="p-5 space-y-3 w-full ">
          <div className="block w-100 ">
            <input
              className="input-field"
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="block w-100">
            <input
              className="input-field"
              name="age"
              placeholder="Enter your Age"
              value={form.age}
              onChange={handleChange}
              required
              onBlur={handleBlur}
            />
            {touched.age && errors.age && (
              <p className="text-red-500 text-sm">{errors.age}</p>
            )}
          </div>
          <div className="block w-100">
            <input
              className="input-field"
              type="text"
              name="phone"
              placeholder="Enter your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="block w-100">
            <input
              className="input-field"
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={handleChange}
              required
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="block w-100">
            <textarea
              className="input-field"
              name="address"
              placeholder="Enter your Address"
              value={form.address}
              onChange={handleChange}
              required
              onBlur={handleBlur}
            ></textarea>
            {touched.address && errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default ItemManager;
