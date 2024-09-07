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
        <ul className="space-y-2 sm:space-y-4 p-4 sm:p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task)=>(
                <li key={task.id} className="flex flex-col sm:flex-row gap-2">
                    <button 
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`} 
                        onClick={()=> props.onTaskClick(task.id)}
                    >
                        <span className="break-words">{task.title}</span>
                        <span className="float-right">{task.isCompleted ? '✓' : '?'}</span>
                    </button>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                        <button 
                            className="bg-slate-400 p-2 rounded-md text-white flex-1 sm:flex-none"
                            onClick={()=> onSeeDetails(task)}
                        >
                            <ChevronRight className="mx-auto"/>
                        </button>
                        <button 
                            className="bg-slate-400 p-2 rounded-md text-white flex-1 sm:flex-none" 
                            onClick={()=>props.onDeleteTask(task.id)}
                        >
                            <TrashIcon className="mx-auto"/>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Tasks