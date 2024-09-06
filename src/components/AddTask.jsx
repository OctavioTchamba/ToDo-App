import { useState } from "react"
import Input from "./Input";

function AddTask(props){
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("")
    return(
       <div className="my-4 space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <Input
        type="text" 
        placeholder="Digite o titulo da tarefa" 
       
        value={title}
        onChange={(event)=> setTitle(event.target.value)}
        />
        <Input
        type="text" 
        placeholder="Digite a descriçao da tarefa" 
        
        value={description}
        onChange={(event)=> setDescription(event.target.value)}
        />
        <button className="bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={()=>{ 
            //criar nova tarefa e verificar se os camos estao vazios
            if (!title.trim() || !description.trim()) {
                alert("Por favor, preencha todos os campos.");
                return;
            }
            props.onAddTask(title, description)
            setTitle("");
            setDescription("")
        }}
        >Adicionar</button>
       </div>
    )
}

export default AddTask