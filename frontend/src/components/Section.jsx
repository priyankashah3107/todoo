import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import toast from 'react-hot-toast';
import Task from '../components/Task'; // Make sure Task component is imported

const Section = ({ status, tasks, setTasks, todos, inProgress, closed }) => {
  const [data, setData] = useState(tasks)
  const [{ isOver }, drop] = useDrop({
    accept: 'task',
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  let text = 'Todo';
  let bg = 'bg-blue-400';
  let taskToMap = todos;

  if (status === 'inProgress') {
    text = 'In Progress';
    bg = 'bg-purple-400';
    taskToMap = inProgress;
  }
  if (status === 'closed') {
    text = 'Closed';
    bg = 'bg-green-400';
    taskToMap = closed;
  }

  const addItemToSection = (id) => {
    console.log('Dropped', id, status);

    setTasks((prev) => {
      const modifiedTasks = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });

      toast.success('🎉 Task status changed');
      return modifiedTasks;
    });
  };

  return (
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? 'bg-[#f5f5f5]' : ''}`}>
      <Header text={text} bg={bg} count={taskToMap.length} />
      {taskToMap.length > 0 &&
        taskToMap.map((task) => <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />)}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
      {text}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">{count}</div>
    </div>
  );
};

export default Section;
