import React, { useEffect, useState } from 'react'
import{ Link} from "react-router-dom"
import toast from 'react-hot-toast';

const ListTasks = ({tasks, setTasks}) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    const filterTodo = tasks.filter((task) => task.status === "todo")
    const filterinProgress = tasks.filter((task) => task.status === "inProgress");
    const filterClosed = tasks.filter((task) => task.status === "closed")

    setTodos(filterTodo);
    setInProgress(filterinProgress);
    setClosed(filterClosed)
  }, [tasks]);

  const statueues = ["todo", "inProgress", "closed"]


  return (
    <>
     <div className='flex flex-row gap-20'>
       {statueues.map((status, idx) => (
        <Section
        key={idx} 
        status={status}
        tasks={tasks}
        setTasks={setTasks}
        todos={todos}
        inProgress={inProgress}
        closed={closed}
        />))}
     </div>
    </>
  )
}

export default ListTasks


const Section = ({status, tasks, setTasks, todos, inProgress, closed}) => {
  let text = "Todo";
  let bg = "bg-blue-400";
  let taskToMap = todos;

  if(status === "inProgress") {
      text = "In Progress";
      bg = "bg-purple-400";
      taskToMap = inProgress;
  }
  if(status === "closed") {
    text = "Closed";
    bg = "bg-green-400";
    taskToMap = closed;
  }
  return (
    <>
    <div className="w-64">
      <Header text={text} bg={bg} count={taskToMap.length} />
      {taskToMap.length > 0 && taskToMap.map((task) => (
        <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}  />
      ))}
    </div>
     
    </>
  )
}


const Header = ({text, bg, count}) => {
   return (
    <>
    <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
       {text}

       <div className={`ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center`}>
        {count}
       </div>
    </div>
    </>
   )
}


const Task = ({task,  tasks, setTasks}) => {

  const handleDelete = (id) => {
     console.log(id);

     const fTasks = tasks.filter((t) => t.id !== id);

     localStorage.setItem("tasks", JSON.stringify(fTasks)); 
     setTasks(fTasks)

     toast.success("👻 Tasks Removed")
  };

   
  return (
   <>
     <div key={task.id} className="">
      <div className="bg-blue-100 p-10 mt-8 rounded-lg shadow-lg cursor-grab flex flex-col gap-2">
        <h1 className='text-xl font-semibold'>{task.name}</h1>
        <p className="font-medium text-gray-700">{task.description}</p>
        <p className='text-gray-500'>Created At: {task.createdAt}</p>
        {/* theno button yaha add kr k check kr skte h edit delete and view details ka  */}
        <div className='flex flex-row gap-4 pl-2 mt-6 justify-around'>
                        <button className='err' onClick={() => handleDelete(task.id)} > Delete</button>
                        <button className='bl'><Link to={"/edit"}>Edit</Link></button>
                        <button className='bl vd '><Link to={"/detail"}>View Details</Link></button>
         </div>
     </div>
     </div>
   </>
  )
}