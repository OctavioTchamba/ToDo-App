import { ChevronLeft } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"


const TaskPage = () => {
    const navigate = useNavigate()
    const [searchParams ]= useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
<div className="w-[500px] space-y-4">
    <div className="flex justify-center relative mb-5">
        <button className="absolute left-0 top-0 bottom-0"
        onClick={()=> navigate(-1)}
        >
            <ChevronLeft/>
        </button>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
        Detalhes da Tarefa
    </h1>
    </div>
    

    <div className="bg-slate-100 p-4 rounded-md">
<h2 className="text-xl text-slate-400 font-bold">{title}</h2>
<p className="text-slate-600">{description}</p>

    </div>

</div>

    </div>
  )
}

export default TaskPage