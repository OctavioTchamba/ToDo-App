import { ChevronLeft } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

const TaskPage = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    
    return (
        <div className="min-h-screen w-full bg-slate-500 p-4 sm:p-6">
            <div className="w-full max-w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-5">
                    <button 
                        className="absolute left-0 top-1/2 -translate-y-1/2"
                        onClick={() => navigate(-1)}
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-100" />
                    </button>
                    <h1 className="text-2xl sm:text-3xl text-slate-100 font-bold text-center">
                        Detalhes da Tarefa
                    </h1>
                </div>

                <div className="bg-slate-100 p-4 rounded-md">
                    <h2 className="text-lg sm:text-xl text-slate-400 font-bold break-words">{title}</h2>
                    <p className="text-slate-600 mt-2 break-words">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default TaskPage