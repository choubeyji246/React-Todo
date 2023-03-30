import Header from "./Components/Header";
import Input from "./Components/Input";
import Note from "./Components/Note";
import {useState} from "react"

function App() {
  const [notes, setNotes]=useState([])

function addNote(newNote){
  setNotes((prevNote)=>{
    return [...prevNote,newNote]
  })
}

function onDelete(id){
    setNotes((prevNote)=>{
      return prevNote.filter((note,index)=>{
        return index !== id
      })
    })
}


  return (
   <div >
     <Header  title="ToDo List"/>
     <div className="contents">
     <Input onAdd={addNote} />
    { notes.map((noteItem,index)=>{
     return <Note key={index}
                   id={index}
                   title={noteItem.title}
                   content={noteItem.content} 
                   onDelete={onDelete}  />
     })}   
     </div>
   
   </div>
  );
}

export default App;
