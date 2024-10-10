import AddTask from "./Components/AddTask";
import Tasks from "./Components/tasks";
import "./App.css";
import { useState } from "react";

// State (Estado)
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full-stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full-stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor full-stack",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId){
    const newTasks = tasks.map(tasks => {
      if(task.id === taskId){
        return{...task, isCompleted: !task.isCompleted}
      }
      return task;
    })
    setTasks(newTasks)
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          {" "}
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
