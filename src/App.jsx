import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import "./App.css";
import { useState, useEffect} from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    /*{
      id: 1,
      title: "Estudar Programação",
      description: "Estudar programaçao para ser dev fullstack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Design",
      description: "Estudar design para ser pro",
      isCompleted: false,
    },
    {
      id: 3, // Alterado o id para 3 para evitar duplicação
      title: "Estudar UI/UX",
      description: "Estudar UI/UX para ser pro em interfaces",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Praticar Projetos",
      description: "Desenvolver projetos práticos para aplicar conhecimentos",
      isCompleted: false,
    }*/
  );

/*SE QUISER PODE CHAMAR UMA API PARA PEGAR AS TAREFA
  useEffect(()=>{
    const fetchTasks = async()=>{
 //CHAMAR A API
   const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
    method: "GET"
   })
   const data =await response.json();
   console.log(data)
    //PEGAR OS DADOS QUE RETORNA A API

    //ARMAZENAR OS DADOS NO STATE
    }
    //SE QUISER PODE CHAMAR UMA API PARA PEGAR AS TAREFA
   fetchTasks();
  },[])*/

  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTask(taskId){
    const newTask = tasks.filter((task) => task.id != taskId)
    setTasks(newTask)
     
    
  }
  

  function onAddTask(title, description){
   const newTask ={
    id: tasks.length +1,
    title: title,
    description: description,
    isCompleted: false,
   };
   setTasks([...tasks, newTask])
  
  }
  
  return (
    <div className="min-h-screen w-full bg-slate-500 flex justify-center p-4 sm:p-6">
      <div className="w-full max-w-[500px] space-y-4">
        <h1 className="text-2xl sm:text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask  onAddTask={onAddTask} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTask={onDeleteTask}/>

        <h1 className="font-bold text-slate-200 text-2xl">2024 &copy; Vakeetu Ethinnics Technologies</h1>
        <p className="font-bold text-slate-200">Inovação com Raízes na Tradição</p>
      </div>
    </div>
  );
}

export default App;