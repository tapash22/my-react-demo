import { useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ItemForm from "./components/item/ItemForm";
import FormDialog from "./components/dialog/FormDialog";
import ItemList from "./components/item/ItemList";
import { initialState, itemReducer, type Item } from "./reducer/itemreducer";

function App() {
  const date = new Date().getDate();

  const [count, setCount] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Item | undefined>(undefined);

  // Item state for list
  const [state, dispatch] = useReducer(itemReducer, initialState);

  // Handlers for ItemList
  const handleEdit = (item: Item) => {
    setEditItem(item);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_ITEM", payload: { id } });
  };
  const handleCloseForm = () => {
    setOpen(false);
    setEditItem(undefined);
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <p>{date}</p>
      <h2>{count}</h2>
      <button
        className="bg-green-600 rounded-xl px-5 py-2 text-sm text-red-500 font-normal tracking-wide"
        onClick={() => setCount(count + 1)}
      >
        click
      </button>
      <Form />

      <button
        className="bg-green-600 rounded-xl px-5 py-2 text-sm text-red-500 font-normal tracking-wide"
        onClick={() => setOpen(true)}
      >
        click
      </button>
      <ItemList items={state} onEdit={handleEdit} onDelete={handleDelete} />
      <FormDialog open={open} onClose={() => setOpen(false)}>
        <ItemForm
          dispatch={dispatch}
          onClose={handleCloseForm}
          editItem={editItem}
        />
      </FormDialog>
    </>
  );
}

export default App;
