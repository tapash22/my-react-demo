import { useReducer } from "react";
import { formreducer, initialState} from '../reducer/formReducer.ts'

function Form(){
    const [state, dispatch] = useReducer(formreducer,initialState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("form submit",state)
        dispatch({
            type:'RESET_FORM'
        })
    };

    return(
        <>
        <form onSubmit={handleSubmit} className="block p-5 border-2 border-gray-400 rounded-lg space-y-4 my-5">
            <input className="ring-1 rounded-lg p-3 ring-gray-400 focus:ring-1 w-full focus:ring-blue-500" placeholder="name" value={state.name} onChange={(e)=>
                dispatch({
                    type:"SET_INPUT",
                    field:"name",
                    value:e.target.value
                })
            }
            />
             <input className="ring-1 rounded-lg p-3 ring-gray-400 focus:ring-1 w-full focus:ring-blue-500" placeholder="email" value={state.email} onChange={(e)=>
                dispatch({
                    type:"SET_INPUT",
                    field:"email",
                    value:e.target.value
                })
            }
            />
             <input className="ring-1 rounded-lg p-3 ring-gray-400 focus:ring-1 w-full focus:ring-blue-500" placeholder="age" value={state.age} onChange={(e)=>
                dispatch({
                    type:"SET_INPUT",
                    field:"age",
                    value:e.target.value
                })
            }
            />

            <button className="bg-black rounded-md px-4 py-2 text-bold font-normal text-white" type="submit">
                submit
            </button>
        </form>
        </>
    )
}

export default Form