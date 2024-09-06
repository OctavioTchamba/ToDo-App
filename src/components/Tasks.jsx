import { ChevronRight, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"


function Tasks(props){
    const navigate = useNavigate()
    function onSeeDetails(task){
        const query = new URLSearchParams()
        query.set("title", task.title);
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }
    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map((task)=>(
            <li key={task.id} className="flex gap-2">
                <button className={`bg-slate-400 text-left w-full text-white p-1 rounded-md ${task.isCompleted && "line-through"} `} onClick={()=> props.onTaskClick(task.id)}>{task.title}
                {task.isCompleted ? '✓' : '?'}

                </button>
               
            <button className="bg-slate-400 p-1 rounded-md text-white"
            onClick={()=> onSeeDetails(task)}
            >
                <ChevronRight/>
            </button>
             <button className="bg-slate-400 p-1 rounded-md text-white" onClick={()=>props.onDeleteTask(task.id)}>
                    <TrashIcon/>
                </button></li>
            
        ))
    }
    </ul>
    )
}



export default Tasks