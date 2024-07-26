// import React from 'react'
// import Navbar from './Navbar'
// import { NotebookIcon } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import { ArrowDown } from 'lucide-react'


// const todos = [
//   {
//     id: 1,
//     todo: "Task 3",
//     desc: "Description 3",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },

//   {
//     id: 2,
//     todo: "Task 2",
//     desc: "Description 2",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },
//   {
//     id: 3,
//     todo: "Task 4",
//     desc: "Description 4",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },

//   {
//     id: 4,
//     todo: "Task 7",
//     desc: "Description 7",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },
//   {
//     id: 5,
//     todo: "Task 9",
//     desc: "Description 9",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },
//   {
//     id: 6,
//     todo: "Task 1",
//     desc: "Description 1",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },
// ]


// const onProgress = [
//   {
//     id: 1,
//     todo: "Task 10",
//     desc: "Description 10",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },

//   {
//     id: 2,
//     todo: "Task 12",
//     desc: "Description 12",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },
//   {
//     id: 3,
//     todo: "Task 14",
//     desc: "Description 14",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },
// ]


// const done = [
//   {
//     id: 1,
//     todo: "Task 11",
//     desc: "Description 11",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },

//   {
//     id: 2,
//     todo: "Task 19",
//     desc: "Description 19",
//     date: Date.now(),
//     del: <button className="btn btn-error text-white">Delete</button>,
//     ed: <button className="btn btn-primary text-white"><Link to={"/edit"}>Edit</Link></button>,
//     view: <button className="btn btn-error text-white"><Link to={"/detail"}>View Details</Link></button>
//   },
 
// ]


// const Dashboard = () => {
//   const [search, setSearch] = useState("")
//   return (
//     <>
//      <div>
//      <div className='bg-blue-600 w-screen p-5 flex flex-row justify-between'>
//         <NotebookIcon  className='text-white' size={25}/>
//         <div className='flex flex-row gap-10 text-white'>
//         <button className="btn btn-error text-white">Logout</button>
//         </div>
//        </div>
       
//        <button className='btn rounded-md w-[230px] btn-primary text-white mt-12'>Add Task</button>

//        <div className='shadow-md  w-screen h-full flex flex-row vals-center justify-between pl-6 pr-6 mt-10'>
//         <label className='flex flex-row vals-center gap-3 text-xl'>
//           Search:
//           <input type="text" placeholder="Search" name='search'  onClick={(e) => setSearch(e.target.value)} className="input input-bordered w-full max-w-xs" />
//         </label>
//         <label className='flex flex-row vals-center gap-3 text-xl'>
//           Search:
//           <div className="dropdown dropdown-bottom">
//           <div tabIndex={0} role="button" className="btn m-1 bg-white ">Recent <ArrowDown/> </div>
//           <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
//           <li><a>Recent</a></li>
//           <li><a>Old</a></li>
//           </ul>
//           </div>
//         </label>
//        </div>
//        <div className='drag-anddrop flex flex-row justify-center gap-20 mt-10'>
//           <div className="c1 h-[400px] w-[400px] shadow-md rounded-md overflow-y-scroll overflow-x-hidden">
//             <h1 className='text-xl font-semibold ml-2 w-[250px] bg-blue-600 text-white pl-2 rounded-md'>TODO</h1>

//             <div>
//               {todos.map((val, idx) => (
//                  <div key={idx} className='bg-blue-200 w-[370px] h-[200px] ml-4 mt-2 rounded-md pl-2 flex flex-col'>
                     
//                      <div className="flex flex-col">
//                       <h1 className='text-xl font-medium'>{val.todo}</h1>
//                       <p className='text-'>{val.desc}</p>
//                      </div>

//                      <p className='text-base mt-6'>Created At: {new Date(val.date).toLocaleString()}</p>
//                       <div className='flex flex-row gap-4 pl-2 mt-6 justify-around'>
//                         <button className='w-[80px] '>{val.del}</button>
//                         <button className='w-[50px]'>{val.ed}</button>
//                         <button className='w-[80px]'>{val.view}</button>
//                       </div>
//                  </div>
//               ))}
//             </div>

//           </div>

//           <div className="c1 h-[400px] w-[400px] shadow-md rounded-md overflow-y-scroll overflow-x-hidden">
//             <h1 className='text-xl font-semibold ml-2 w-[250px] bg-blue-600 text-white pl-2 rounded-md'>IN PROGRESS</h1>

//             <div>
//               {onProgress.map((val, idx) => (
//                  <div key={idx} className='bg-blue-200 w-[370px] h-[200px] ml-4 mt-2 rounded-md pl-2 flex flex-col'>
                     
//                      <div className="flex flex-col">
//                       <h1 className='text-xl font-medium'>{val.todo}</h1>
//                       <p className='text-'>{val.desc}</p>
//                      </div>

//                      <p className='text-base mt-6'>Created At: {new Date(val.date).toLocaleString()}</p>
//                       <div className='flex flex-row gap-4 pl-2 mt-6 justify-around'>
//                         <button className='w-[80px] '>{val.del}</button>
//                         <button className='w-[50px]'>{val.ed}</button>
//                         <button className='w-[80px]'>{val.view}</button>
//                       </div>
//                  </div>
//               ))}
//             </div>
            
//           </div>
          
//           <div className="c1 h-[400px] w-[400px] shadow-md rounded-md overflow-y-scroll overflow-x-hidden">
//             <h1 className='text-xl font-semibold ml-2 w-[250px] bg-blue-600 text-white pl-2 rounded-md'>DONE</h1>

//             <div>
//               {done.map((val, idx) => (
//                  <div key={idx} className='bg-blue-200 w-[370px] h-[200px] ml-4 mt-2 rounded-md pl-2 flex flex-col'>
                     
//                      <div className="flex flex-col">
//                       <h1 className='text-xl font-medium'>{val.todo}</h1>
//                       <p className='text-'>{val.desc}</p>
//                      </div>

//                      <p className='text-base mt-6'>Created At: {new Date(val.date).toLocaleString()}</p>
//                       <div className='flex flex-row gap-4 pl-2 mt-6 justify-around'>
//                         <button className='w-[80px] '>{val.del}</button>
//                         <button className='w-[50px]'>{val.ed}</button>
//                         <button className='w-[80px]'>{val.view}</button>
//                       </div>
//                  </div>
//               ))}
//             </div>
            
//           </div>
//        </div>
//      </div>
//     </>
//   )
// }

// export default Dashboard



import React, { useEffect, useState } from 'react'
import CreateTasks from './CreateTasks';
import ListTasks from './ListTasks';
import  toast, { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import {NotebookIcon} from "lucide-react"
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  console.log("tasks", tasks);

  const {mutate: logOut} = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch("/api/auth/logout", {
          method: "DELETE",
        })
        const data = await res.json()
        if(!res.ok) {
          throw new Error(data.error || "Something went wrong"); 
        }
      } catch (error) {
        console.log(error)
        throw new Error(error)
      }
    }, 
    onSuccess: () => {
      toast.success("Logout Successfully");
      navigate("/login"); 
    },
    onError: (error) => {
      toast.error(error.message)
    }
  });

  // const {mutate: authUser} = useMutation({
  //    mutationFn: async () => {
  //      try {
  //          const res = await fetch("/api/auth/me");
  //          const data = await res.json();
  //          if(!res.ok) {
  //           throw new Error(data.error || "Something went wrong");
  //          } 
  //          console.log("This is AuthUser", data);
  //          return data;
  //      } catch (error) {
  //       console.error(error.message);
  //        throw new Error(error)
  //      }
  //    },
  //    onSuccess: () => {
  //     toast.success("AuthUSer")
  //     navigate("/dashboard")
  //    },
  //    onError: (error) => {
  //      toast.error(error)
  //    }
  // })

  useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, [])
  return (
    <> 

<div className='bg-blue-600 w-screen p-5 flex flex-row justify-between'>
         <NotebookIcon  className='text-white' size={25}/>
         <div className='flex flex-row gap-10 text-white'>
         <button 
         onClick={(e) => {
           e.preventDefault();
           logOut()
         }}
         className="btn btn-error text-white">Logout</button>
         </div>
        </div>
      {/* yaha per aur bhi logout wali chize aayegi baki  toast k baad sab sab dnd se wrap kr rhi */}
      
      <DndProvider backend={HTML5Backend} >
     <Toaster />
     <div className="flex flex-col items-center w-screen h-screen pt-10 gap-16">
       <CreateTasks  tasks={tasks} setTasks={setTasks}/>
       <ListTasks tasks={tasks} setTasks={setTasks} />
     </div>
     </DndProvider>
    </>
  )
}

export default Dashboard