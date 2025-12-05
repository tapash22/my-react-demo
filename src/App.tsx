
import { useState } from 'react';
import './App.css'
import Form from './components/Form';

function App() {
  const date = new Date().getDate();

  const [count,setCount] = useState<number>(0)

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Vite + React</h1>
      <p >{date}</p>
      <h2>
        {count}
      </h2>
      <button className='bg-green-600 rounded-xl px-5 py-2 text-sm text-red-500 font-normal tracking-wide' onClick={()=>setCount(count + 1)}>
        click 
      </button>
      <Form />
    </>
  )
}

export default App
