import React from 'react';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Task = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  console.log(isDragging);

  const handleDelete = (id) => {
    console.log(id);

    const filteredTasks = tasks.filter((t) => t.id !== id);

    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    setTasks(filteredTasks);

    toast.success('👻 Task removed');
  };

  return (
    <div key={task.id} className="">
      <div
        ref={drag}
        className={`bg-blue-100 p-10 mt-8 rounded-lg shadow-lg cursor-grab flex flex-col gap-2 ${
          isDragging ? 'opacity-30' : 'opacity-100'
        }`}
      >
        <h1 className="text-xl font-semibold">{task.name}</h1>
        <p className="font-medium text-gray-700">{task.description}</p>
        <p className="text-gray-500">Created At: {task.createdAt}</p>
        <div className="flex flex-row gap-4 pl-2 mt-6 justify-around">
          <button className="err" onClick={() => handleDelete(task.id)}>
            Delete
          </button>
          <button className="bl">
            <Link to={'/edit'}>Edit</Link>
          </button>
          <button className="bl vd">
            <Link to={'/detail'}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
