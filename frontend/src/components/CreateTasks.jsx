// import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';
// import toast from 'react-hot-toast';
// const CreateTasks = ({tasks, setTasks}) => {
//   const [task, setTask] = useState({
//     id: "",
//     name: "",
//     status: "todo",  // can also be inprogress or closed
//   })

//   const [desc, setDesc] = useState({
//     name: ""
//   });

//   console.log(task)
//   console.log(desc)

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if(task.name.length < 3){ return  toast.error("Tasks Must be greater than 3 characters") }
      
//     if(task.name.length > 100){ 
//       return toast.error("Tasks Must not be exceeded more than 100 character");
//       } 
//     setTasks((prev) => {
//       const list = [...prev, task];
//       localStorage.setItem("tasks", JSON.stringify(list))
//       return list;
//     });

//     setDesc((prev) => {
//       const des = [...prev, desc];
//       localStorage.setItem("tasks", JSON.stringify(desc))
//       return des;
//     });

//     toast.success("Task Created");

//     setTask({
//       id: "",
//       name: "",
//       status: "todo",  // can also be inprogress or closed
//     })

//     setDesc({
//        name: ""
//     })

//   }

//   return (
//     <> 
//     <form 
//     onSubmit={handleSubmit}
//     className='flex flex-col'>
//        <button className='btn rounded-md w-[230px] btn-primary text-white mt-12 ml-24 '>Add Task</button>
//       <div className='shadow-md  w-screen h-full flex flex-col  gap-4  pl-6 pr-6 mt-10'>
//          <label className='flex flex-row  gap-3 items-center text-xl'>
//            Add Todo:
//            <input type="text" placeholder="Add Todo" value={task.name} 
//            onChange={(e) => setTask({...task, id:uuidv4(), name: e.target.value})}
//            className="input input-bordered w-full max-w-xs" />
//          </label>

//          <label className='flex flex-row vals-center gap-3 text-xl'>
//            Todo Description:
//            <input type="text" placeholder="Add Description" value={desc.name} 
//            onChange={(e) => setDesc({...desc, name:e.target.value})}
//            className="input input-bordered w-full max-w-xs" />
//          </label>

//         </div>

//         </form>
//     </>
//   )
// }

// export default CreateTasks



import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const CreateTasks = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "", // add description here
    
    status: "todo", // can also be inprogress or closed
    createdAt: "", // add createdAt field
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3) {
      return toast.error("Tasks Must be greater than 3 characters");
    }

    if (task.name.length > 100) {
      return toast.error("Tasks Must not be exceeded more than 100 characters");
    }

    const newTask = {
      ...task,
      id: uuidv4(),
      createdAt: new Date().toLocaleString(),
    };

    setTasks((prev) => {
      const list = [...prev, newTask];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    toast.success("Task Created");

    setTask({
      id: "",
      name: "",
      description: "",
      status: "todo", // can also be inprogress or closed
      createdAt: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <button className='btn rounded-md w-[230px] btn-primary text-white mt-12 ml-24'>Add Task</button>
        <div className=' w-screen h-full flex flex-col gap-4 pl-6 pr-6 mt-10'>
          <label className='flex flex-row gap-3 items-center text-xl'>
            Add Todo:
            <input
              type="text"
              placeholder="Add Todo"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className='flex flex-row vals-center gap-3 text-xl'>
            Todo Description:
            <input
              type="text"
              placeholder="Add Description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              className="input input-bordered w-full max-w-xs"
            />
          </label> 
          
        </div>
      </form>
    </>
  );
};

export default CreateTasks;
