//declear item type
export interface Item {
  id: number;
  name: string;
  age: string;
  phone: string;
  email: string;
  address: string;
}

//declear action type as union operator
export type Action =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "UPDATE_ITEM"; payload: Item }
  | { type: "DELETE_ITEM"; payload: { id: number } }
  | { type: "SET_ITEMS"; payload: Item[] };

//declear array of item
export type ItemList = Item[];

//declear store for array list
export const initialState: ItemList = [];

export function itemReducer(state: ItemList, action: Action): ItemList {
  switch (action.type) {
    case "ADD_ITEM": {
      const newStateAdd = [...state, action.payload];
      localStorage.setItem("items", JSON.stringify(newStateAdd));
      return newStateAdd;
    }
    case "UPDATE_ITEM": {
      const newStateUpdate = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      localStorage.setItem("items", JSON.stringify(newStateUpdate));
      return newStateUpdate;
    }
    case "DELETE_ITEM": {
      const newStateDelete = state.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("items", JSON.stringify(newStateDelete));
      return newStateDelete;
    }
    case "SET_ITEMS":
      return action.payload;

    default:
      return state;
  }
}
