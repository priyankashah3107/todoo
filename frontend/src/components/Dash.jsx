import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ListTasks from './ListTasks'; // Adjust import as needed

const Dash = ({tasks, setTasks}) => {
  // const [tasks, setTasks] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch('/api/posts/all');
  //     if (!res.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await res.json();
  //     if (result.error) {
  //       throw new Error(result.error);
  //     }
  //     setTasks(result);
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <ListTasks tasks={tasks} setTasks={setTasks} />
    </DndProvider>
  );
};

export default Dash;
