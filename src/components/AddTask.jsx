import { useState } from "react"
import Input from "./Input";

function AddTask(props){
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("")
    return(
       <div className="space-y-3 p-4 sm:p-6 bg-slate-200 rounded-md shadow">
        <div className="flex flex-col space-y-3">
            <Input
            type="text" 
            placeholder="Digite o titulo da tarefa" 
            value={title}
            onChange={(event)=> setTitle(event.target.value)}
            className="w-full"
            />
            <Input
            type="text" 
            placeholder="Digite a descriçao da tarefa" 
            value={description}
            onChange={(event)=> setDescription(event.target.value)}
            className="w-full"
            />
        </div>
        <button className="w-full bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={()=>{ 
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