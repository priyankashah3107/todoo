// import React, { useEffect, useState } from 'react'
// import{ Link} from "react-router-dom"
// import toast from 'react-hot-toast';
// import { useDrag, useDrop } from 'react-dnd';

// const ListTasks = ({tasks, setTasks}) => {
//   const [todos, setTodos] = useState([]);
//   const [inProgress, setInProgress] = useState([]);
//   const [closed, setClosed] = useState([]);

//   useEffect(() => {
//     if(Array.isArray(tasks)) {
//     const filterTodo = tasks.filter((task) => task.status === "todo")
//     const filterinProgress = tasks.filter((task) => task.status === "inProgress");
//     const filterClosed = tasks.filter((task) => task.status === "closed")

//     setTodos(filterTodo);
//     setInProgress(filterinProgress);
//     setClosed(filterClosed)
//     }
//   }, [tasks]);

//   const statueues = ["todo", "inProgress", "closed"]


//   return (
//     <>
//      <div className='flex flex-row gap-20'>
//        {statueues.map((status, idx) => (
//         <Section
//         key={idx} 
//         status={status}
//         tasks={tasks}
//         setTasks={setTasks}
//         todos={todos}
//         inProgress={inProgress}
//         closed={closed}
//         />))}
//      </div>
//     </>
//   )
// }

// export default ListTasks


// const Section = ({status, tasks, setTasks, todos, inProgress, closed}) => {

    
//   const [{ isOver }, drop] = useDrop(() => ({
//     accept: "task",
//     drop: (item) => addItemToSection(item.id),
//     collect: (monitor) => ({
//       isOver: !!monitor.isOver()
//     })
//   }))


//   let text = "Todo";
//   let bg = "bg-blue-400";
//   let taskToMap = todos;

//   if(status === "inProgress") {
//       text = "In Progress";
//       bg = "bg-purple-400";
//       taskToMap = inProgress;
//   }
//   if(status === "closed") {
//     text = "Closed";
//     bg = "bg-green-400";
//     taskToMap = closed;
//   }

//   const addItemToSection = (id) => {
//      console.log("Dropped", id, status)
     
//      setTasks((prev) => {
//       const modifiTasks = prev.map((t) => {
//         if(t.id === id){
//           return {...t, status: status};
//         }
//         return t;
//       });
//       localStorage.setItem("tasks", JSON.stringify(modifiTasks));
//       toast.success("🎉 Tasks status Changed")
//       return modifiTasks;
//      })
//   }


//   return (
//     <>
//     <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-[#f5f5f5]" : ""}`}>
//       <Header text={text} bg={bg} count={taskToMap.length} />
//       {taskToMap.length > 0 && taskToMap.map((task) => (
//         <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
//       ))}
//     </div>
     
//     </>
//   )
// }


// const Header = ({text, bg, count}) => {
//    return (
//     <>
//     <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
//        {text}

//        <div className={`ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center`}>
//         {count}
//        </div>
//     </div>
//     </>
//    )
// }


// const Task = ({task,  tasks, setTasks}) => {

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: "task",
//     item: {id: task.id},
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging()
//     })
//   }))

//   console.log(isDragging)



//   const handleDelete = (id) => {
//      console.log(id);

//      const fTasks = tasks.filter((t) => t.id !== id);

//      localStorage.setItem("tasks", JSON.stringify(fTasks)); 
//      setTasks(fTasks)

//      toast.success("👻 Tasks Removed")
//   };

   
//   return (
//    <>
//      <div key={task.id} className="">
//       <div ref={drag} className={`bg-blue-100 p-10 mt-8 rounded-lg shadow-lg cursor-grab flex flex-col gap-2 ${isDragging ? "opacity-30" : "opacity-100"} `}>
//         <h1 className='text-xl font-semibold'>{task.name}</h1>
//         <p className="font-medium text-gray-700">{task.description}</p>
//         <p className='text-gray-500'>Created At: {task.createdAt}</p>
//         {/* theno button yaha add kr k check kr skte h edit delete and view details ka  */}
//         <div className='flex flex-row gap-4 pl-2 mt-6 justify-around'>
//                         <button className='err' onClick={() => handleDelete(task.id)} > Delete</button>
//                         <button className='bl'><Link to={"/edit"}>Edit</Link></button>
//                         <button className='bl vd '><Link to={"/detail"}>View Details</Link></button>
//          </div>
//      </div>
//      </div>
//    </>
//   )
// }








// updated code 



import React, { useEffect, useState } from 'react'
import{ Link} from "react-router-dom"
import toast from 'react-hot-toast';
import { useDrag, useDrop } from 'react-dnd';
import { useMutation } from '@tanstack/react-query';

const ListTasks = ({tasks, setTasks}) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/posts/all");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await res.json();
        if (result.error) {
          throw new Error(result.error);
        }
        console.log("GetAllData", result);
        setTodos(result);
      } catch (error) {
        console.error('Fetch error:', error);
        
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if(Array.isArray(tasks)) {
    const filterTodo = tasks.filter((task) => task.status === "todo")
    const filterinProgress = tasks.filter((task) => task.status === "inProgress");
    const filterClosed = tasks.filter((task) => task.status === "closed")

    setTodos(filterTodo);
    setInProgress(filterinProgress);
    setClosed(filterClosed)
    }
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

    
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))


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

  const addItemToSection = (_id) => {
     console.log("Dropped", _id, status)
     
     setTasks((prev) => {
      const modifiTasks = prev.map((t) => {
        if(t?._id === _id){
          return {...t, status: status};
        }
        return t;
      });
      // localStorage.setItem("tasks", JSON.stringify(modifiTasks));
      toast.success("🎉 Tasks status Changed")
      return modifiTasks;
     })
  }


  return (
    <>
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-[#f5f5f5]" : ""}`}>
      <Header text={text} bg={bg} count={taskToMap.length} />
      {taskToMap.length > 0 && taskToMap.map((task) => (
        <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}/>
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

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: {id: task?._id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  console.log(isDragging)


  // fetching the data 


  // const handleDelete = (id) => {
  //    console.log(id);

  //    const fTasks = tasks.filter((t) => t.id !== id);

  //    localStorage.setItem("tasks", JSON.stringify(fTasks)); 
  //    setTasks(fTasks)

  //    toast.success("👻 Tasks Removed")
  // };

   
  return (
   <>
     <div key={task?._id} className="">
      <div ref={drag} className={`bg-blue-100 p-10 mt-8 rounded-lg shadow-lg cursor-grab flex flex-col gap-2 ${isDragging ? "opacity-30" : "opacity-100"} `}>
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