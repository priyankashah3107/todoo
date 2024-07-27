import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'

const EditPage = ({tasks, setTasks}) => {
  // const [task, setTask] = useState("Task6");
  // const [desc, setDesc] = useState("Description 6")
  const [formData, setFormData] = useState({
    task: "Enter todo",
   description:"update Description"

  })

  const {mutate: updateTask, isPending, isError} = useMutation({
     mutationFn: async({task}) => {
       try {
         const res = await fetch(`/api/posts//update/:${id}`)
       } catch (error) {
        
       }
     }
  })
  const saveTask = (e) => {
    e.preventDefault();
    updateTask()
  }


  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  }
  return (
    <div>
      <form onClick={saveTask} 
      className='flex flex-col mt-20 ml-96 rounded-xl justify-center w-[600px] h-[500px] bg-[#f5f5f5] items-center gap-10'>
        <h1 className='text-2xl font-semibold'>Edit Form</h1>
        <div className='flex flex-col '>

        <label className='text-[22px]'>Title</label>
        <input type="text"
        placeholder="Enter task" 
        onChange={handleInputChange}
        value={formData.task}
         className='p-6 border-b-2 ' />
        </div>

        <div className='flex flex-col '>
        <label className='text-[22px]'>Description</label>
        <input type="text" 
        placeholder="Enter Description"
        onChange={handleInputChange}
        value={formData.description}
        className='p-6 border-b-2 text-black' />
        </div>
        
      </form>
    </div>
  )
}

export default EditPage