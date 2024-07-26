// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import toast from 'react-hot-toast';

// const CreateTasks = ({ tasks, setTasks }) => {
//   const [task, setTask] = useState({
//     id: "",
//     name: "",
//     description: "", // add description here
    
//     status: "todo", // can also be inprogress or closed
//     createdAt: "", // add createdAt field
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (task.name.length < 3) {
//       return toast.error("Tasks Must be greater than 3 characters");
//     }

//     if (task.name.length > 100) {
//       return toast.error("Tasks Must not be exceeded more than 100 characters");
//     }

//     const newTask = {
//       ...task,
//       id: uuidv4(),
//       createdAt: new Date().toLocaleString(),
//     };

//     setTasks((prev) => {
//       const list = [...prev, newTask];
//       localStorage.setItem("tasks", JSON.stringify(list));
//       return list;
//     });

//     toast.success("Task Created");

//     setTask({
//       id: "",
//       name: "",
//       description: "",
//       status: "todo", // can also be inprogress or closed
//       createdAt: "",
//     });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className='flex flex-col'>
//         <button className='btn rounded-md w-[230px] btn-primary text-white mt-12 ml-24'>Add Task</button>
//         <div className=' w-screen h-full flex flex-col gap-4 pl-6 pr-6 mt-10'>
//           <label className='flex flex-row gap-3 items-center text-xl'>
//             Add Todo:
//             <input
//               type="text"
//               placeholder="Add Todo"
//               value={task.name}
//               onChange={(e) => setTask({ ...task, name: e.target.value })}
//               className="input input-bordered w-full max-w-xs"
//             />
//           </label>
//           <label className='flex flex-row vals-center gap-3 text-xl'>
//             Todo Description:
//             <input
//               type="text"
//               placeholder="Add Description"
//               value={task.description}
//               onChange={(e) => setTask({ ...task, description: e.target.value })}
//               className="input input-bordered w-full max-w-xs"
//             />
//           </label> 
          
//         </div>
//       </form>
//     </>
//   );
// };

// export default CreateTasks;





import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';

const CreateTasks = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    description: "", // add description here
    
    status: "todo", // can also be inprogress or closed
    createdAt: "", // add createdAt field
  });


  const {mutate: createPost, isPending, isError, error} = useMutation({
      mutationFn: async({name, description }) => {
         try {
          const res = await fetch("/api/posts/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name, description})
          })
          if(!res.ok) throw new Error("Something went Wrong");
          const data = await res.json();
          if(data.error) throw new Error(data.error)
          console.log("Todo and Description", data);
          return data;

         } catch (error) {
          throw error
         }
      },
      onSuccess: (data) => {
        toast.success("Todo Created Successfully");
        setTasks((prevTasks) => [...prevTasks, data.newPost]);
        setTask({
          id: "",
        name: "",
        description: "",
        status: "todo",
        createdAt: "",
        })
      },
      onError: (error) => {
        toast.error(error)
      }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
     
    createPost({name: task.name, description: task.description})

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


