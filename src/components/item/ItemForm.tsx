import React, { useState, useEffect } from "react";
import { type Item } from "../../reducer/itemreducer";

interface ItemFormProps {
  editItem?: Item;
  onClose: () => void;
  onFormChange: (data: Item) => void;
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

  useEffect(() => {
    setForm(editItem || EMPTY_FORM);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem]);

  //handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
    onFormChange(newForm);
  };

  return (
    <>
      {/* handle form */}
      <div className="block w-full h-full drop-shadow-black rounded-xl">
        <form className="p-5 space-y-4">
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            name="age"
            placeholder="Enter your Age"
            value={form.age}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            type="text"
            name="phone"
            placeholder="Enter your Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="input-field"
            name="address"
            placeholder="Enter your Address"
            value={form.address}
            onChange={handleChange}
            required
          ></textarea>
        </form>
      </div>
    </>
  );
}

export default ItemManager;
