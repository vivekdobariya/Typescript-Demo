import React from 'react'
import { useState } from 'react';

interface MyButtonProps{
    text : string | number | boolean ;
    onClick? : ()=> void;
}

interface Book {
    name : string;
    price : number;
}

const MyButton:React.FC<MyButtonProps> = (props) => {
    const {text, onClick} = props;
    // const [value, setValue] = useState<number>(1)
    // const [value, setValue] = useState<Book>({
    //     name : "one",
    //     price :10
    // })
    const [value, setValue] = useState<string | undefined>()

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
     setValue(e.target.value)
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(e);
    }

  return (   
    //  <div>
    // <h3>Name {value.name} (Rs. {value.price})</h3>
    // <button onClick={()=>setValue({name : "two", price : 20})} >{text}</button>
    // </div>

    <div>
        <form onSubmit={handleSubmit}>
        <input onChange={handleOnChange} type="text" placeholder='Enter Your Name' />
        <button type='submit'>Submit</button>
        </form>
        <h1>{value}</h1>
    </div>
  )
}

export default MyButton;