import React, { useState } from 'react'

export default function Input(props) {
     const [val, setVal]=useState({
     title: "",
     content: "",
});

 function handleChange(event){
      const { name, value} = event.target;
      setVal((prevVal) => {
        return{
        ...prevVal,
        [name] : value,
        }
      });
     }
     function save(){
        props.onAdd(val)
     }


  return (
         <div className="input-contents">
      <input type="text" value={val.title} onChange={handleChange} name="title"   placeholder="Title"/>
      <textarea placeholder="Description" name='content' value={val.content} onChange={handleChange}></textarea>
      <button onClick={save}>Add</button>
    </div>
  )
  }
