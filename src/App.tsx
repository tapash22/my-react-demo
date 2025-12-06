import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ItemForm from "./components/item/ItemForm";
import FormDialog from "./components/dialog/FormDialog";
import ItemList from "./components/item/ItemList";
import { initialState, itemReducer, type Item } from "./reducer/itemreducer";
import ConfirmationMessage from "./components/alert/ConfirmationMessage";

function App() {
  //use for show date
  const date = new Date().getDate();

  // Load initial state from localStorage
  const savedItems = localStorage.getItem("items");
  // Item state for list
  const [state, dispatch] = useReducer(
    itemReducer,
    savedItems ? JSON.parse(savedItems) : initialState
  );

  const [count, setCount] = useState<number>(0);
  //open form dialog
  const [dialogOpen, setDialogOpen] = useState(false);
  //confirmation dialog show or hide
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  //delete id
  const [deleteId, setDeleteId] = useState<number | null>(null);
  //edit item
  const [editItem, setEditItem] = useState<Item | undefined>(undefined);
  //item form data
  const [formData, setFormData] = useState<Item | undefined>(undefined);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);

  // close dialog
  const handleClose = () => {
    setDialogOpen(false);
    setEditItem(undefined);
    setFormData(undefined);
    if (isConfirmOpen) {
      setIsConfirmOpen(false);
    }
  };

  // Handlers for ItemList
  const handleEdit = (item: Item) => {
    setEditItem(item);
    setDialogOpen(true);
  };

  // create or update
  const handleAddOrUpdate = () => {
    if (!formData) return;

    if (editItem) {
      dispatch({ type: "UPDATE_ITEM", payload: formData });
    } else {
      dispatch({ type: "ADD_ITEM", payload: { ...formData, id: Date.now() } });
    }
    handleClose();
  };

  // handle delete
  const handleDelete = (id: number) => {
    setDeleteId(id);
    setIsConfirmOpen(true);
  };

  const confirmDelete = (confirm: boolean) => {
    if (confirm && deleteId !== null)
      dispatch({ type: "DELETE_ITEM", payload: { id: deleteId } });

    setIsConfirmOpen(false);
    setDeleteId(null);
  };

  // form onChange
  const handleFormChange = (data: Item) => {
    setFormData(data);
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
        onClick={() => setDialogOpen(true)}
      >
        click
      </button>
      <ItemList items={state} onEdit={handleEdit} onDelete={handleDelete} />

      <FormDialog
        open={dialogOpen}
        onClose={handleClose}
        title={editItem ? "Edit Item" : "Add Item"}
        sizeType="medium"
        footer={
          <>
            <button
              type="button"
              onClick={handleClose}
              className="px-5 py-2 bg-gray-400 font-medium text-lg hover:bg-gray-500 text-black rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleAddOrUpdate}
              className="px-5 py-2 rounded-lg bg-blue-600 font-medium text-lg text-white"
            >
              {editItem ? "Update Item" : "Add Item"}
            </button>
          </>
        }
      >
        <ItemForm
          onClose={handleClose}
          editItem={editItem}
          onFormChange={handleFormChange}
        />
      </FormDialog>

      <ConfirmationMessage
        showConfirmDialog={isConfirmOpen}
        title="DELETE?"
        subtitle="Item"
        onConfirm={confirmDelete}
        onClose={handleClose}
      />
    </>
  );
}

export default App;
