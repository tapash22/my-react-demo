import React, { useState, useEffect } from "react";
import { type Action, type Item } from "../../reducer/itemreducer";

interface ItemFormProps {
  dispatch: React.Dispatch<Action>;
  onClose: () => void;
  editItem?: Item;
}

function ItemManager({ dispatch, onClose, editItem }: ItemFormProps) {
  const EMPTY_FORM: Item = {
    id: 0,
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  };
  const [form, setForm] = useState<Item>(editItem || EMPTY_FORM);
  const [isEditing, setIsEditing] = useState(!!editItem);

  useEffect(() => {
    // Only update form if editItem is defined AND different from current form
    if (editItem && editItem.id !== form.id) {
      setForm(editItem);
      setIsEditing(true);
    }

    // Only reset form if editItem becomes undefined AND form is not already empty
    if (!editItem && form.id !== 0) {
      setForm(EMPTY_FORM);
      setIsEditing(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editItem]);

  //handle form input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      dispatch({ type: "UPDATE_ITEM", payload: form });
      setIsEditing(false);
    } else {
      dispatch({
        type: "ADD_ITEM",
        payload: { ...form, id: Date.now() },
      });
    }
    onClose();
  };

  //handle cancel form
  const handleCancel = () => {
    setForm(EMPTY_FORM);
    setIsEditing(false);
    onClose();
  };

  //main code with return

  return (
    <>
      {/* handle form */}
      <div className="block w-full h-full ring-1 ring-gray-300  drop-shadow-black rounded-xl">
        <h2 className="flex justify-center items-center text-xl font-normal tracking-wide py-3">
          {isEditing ? "Edit Item" : "Add Item"}
        </h2>

        <form onSubmit={handleSubmit} className="p-5 space-y-4">
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
          <div className="flex justify-end items-center gap-3">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-lg font-normal tracking-wide text-white drop-shadow-amber-100"
            >
              {isEditing ? "Update Item" : "Add Item"}
            </button>
            <button
              className="px-3 py-2 bg-gray-400 hover:bg-gray-500 drop-shadow-2xl text-lg font-normal tracking-wide rounded-lg"
              type="button"
              onClick={handleCancel}
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ItemManager;
