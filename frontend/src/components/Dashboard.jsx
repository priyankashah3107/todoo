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






import React, { useState, useEffect } from 'react';
import { NotebookIcon, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  todo: [
    { id: 1, todo: "Task 3", desc: "Description 3", date: Date.now() },
    { id: 2, todo: "Task 2", desc: "Description 2", date: Date.now() },
    { id: 3, todo: "Task 4", desc: "Description 4", date: Date.now() },
    { id: 4, todo: "Task 7", desc: "Description 7", date: Date.now() },
    { id: 5, todo: "Task 9", desc: "Description 9", date: Date.now() },
    { id: 6, todo: "Task 1", desc: "Description 1", date: Date.now() },
  ],
  inProgress: [
    { id: 7, todo: "Task 10", desc: "Description 10", date: Date.now() },
    { id: 8, todo: "Task 12", desc: "Description 12", date: Date.now() },
    { id: 9, todo: "Task 14", desc: "Description 14", date: Date.now() },
  ],
  done: [
    { id: 10, todo: "Task 11", desc: "Description 11", date: Date.now() },
    { id: 11, todo: "Task 19", desc: "Description 19", date: Date.now() },
  ],
};

const Dashboard = () => {
  const [columns, setColumns] = useState(initialData);
  const [search, setSearch] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: copiedItems,
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn];
      const destItems = [...destColumn];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems,
      });
    }
  };

  const renderDeleteButton = () => (
    <button className="btn btn-error text-white">Delete</button>
  );

  const renderEditButton = () => (
    <button className="btn btn-primary text-white">
      <Link to="/edit">Edit</Link>
    </button>
  );

  const renderViewButton = () => (
    <button className="btn btn-error text-white">
      <Link to="/detail">View Details</Link>
    </button>
  );

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div>
        <div className='bg-blue-600 w-screen p-5 flex flex-row justify-between'>
          <NotebookIcon className='text-white' size={25} />
          <div className='flex flex-row gap-10 text-white'>
            <button className="btn btn-error text-white">Logout</button>
          </div>
        </div>

        <button className='btn rounded-md w-[230px] btn-primary text-white mt-12'>Add Task</button>

        <div className='shadow-md w-screen h-full flex flex-row vals-center justify-between pl-6 pr-6 mt-10'>
          <label className='flex flex-row vals-center gap-3 text-xl'>
            Search:
            <input
              type="text"
              placeholder="Search"
              name='search'
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className='flex flex-row vals-center gap-3 text-xl'>
            Sort:
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} role="button" className="btn m-1 bg-white">Recent <ArrowDown /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Recent</a></li>
                <li><a>Old</a></li>
              </ul>
            </div>
          </label>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className='drag-anddrop flex flex-row justify-center gap-20 mt-10'>
            {Object.entries(columns).map(([columnId, column]) => (
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`c1 h-[400px] w-[400px] shadow-md rounded-md overflow-y-scroll overflow-x-hidden ${
                      snapshot.isDraggingOver ? 'bg-gray-100' : ''
                    }`}
                  >
                    <h1 className='text-xl font-semibold ml-2 w-[250px] bg-blue-600 text-white pl-2 rounded-md'>
                      {columnId.toUpperCase()}
                    </h1>
                    {column.map((item, index) => (
                      <Draggable key={item.id.toString()} draggableId={item.id.toString()} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`bg-blue-200 w-[370px] h-[200px] ml-4 mt-2 rounded-md pl-2 flex flex-col ${
                              snapshot.isDragging ? 'shadow-lg' : ''
                            }`}
                          >
                            <div className="flex flex-col">
                              <h1 className='text-xl font-medium'>{item.todo}</h1>
                              <p>{item.desc}</p>
                            </div>
                            <p className='text-base mt-6'>Created At: {new Date(item.date).toLocaleString()}</p>
                            <div className='flex flex-row gap-4 pl-2 mt-6 justify-around'>
                              <button className='w-[80px]'>{renderDeleteButton()}</button>
                              <button className='w-[50px]'>{renderEditButton()}</button>
                              <button className='w-[80px]'>{renderViewButton()}</button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default Dashboard;
