import { useEffect, useReducer, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ItemForm from "./components/form/ItemForm";
import FormDialog from "./components/dialog/FormDialog";
import ItemList from "./components/item/ItemList";
import { initialState, itemReducer, type Item } from "./reducer/itemreducer";
import ConfirmationMessage from "./components/alert/ConfirmationMessage";
import UsingRefExample from "./components/practice/UsingRefExample";
import { LoginForm } from "./components/form/LoginForm";
import { ScrollToTop } from "./components/practice/ScrollToTop";

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
  const [buttonEnable, setButtonEnable] = useState<boolean>(false);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(state));
  }, [state]);

  // close dialog
  const handleClose = () => {
    console.log("click");
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
  const handleFormChange = (data: Item, isValid: boolean) => {
    setFormData(data);
    setButtonEnable(isValid);
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

      <div className="w-full h-full p-5 block space-y-7">
        <UsingRefExample />
        <LoginForm />
      </div>

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
              disabled={!buttonEnable}
              type="button"
              onClick={handleAddOrUpdate}
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
              {editItem ? "Update Item" : "Add Item"}
            </button>
          </>
        }
      >
        <ItemForm editItem={editItem} onFormChange={handleFormChange} />
      </FormDialog>

      <ConfirmationMessage
        showConfirmDialog={isConfirmOpen}
        title="DELETE?"
        subtitle="Item"
        onConfirm={confirmDelete}
        onClose={handleClose}
      />
      <ScrollToTop />
    </>
  );
}

export default App;
