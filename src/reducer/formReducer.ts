export interface FormState {
  name: string;
  age: string;
  email: string;
}

export type FormAction =
  | { type: "SET_INPUT"; field: string; value: string }
  | { type: "RESET_FORM" };

export const initialState: FormState = {
    name:'',
    age:'',
    email:''
};

export function formreducer(state:FormState,action:FormAction) : FormState{
    switch(action.type){
        case "SET_INPUT":
            return{
                ...state,
                [action.field]:action.value
            };
        case "RESET_FORM":
            return initialState;

        default:
            return state;
    }
}