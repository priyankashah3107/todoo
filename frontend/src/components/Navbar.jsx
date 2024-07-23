import React from 'react'
import { NotebookIcon } from 'lucide-react';
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <>
    <div className='bg-blue-600 w-screen p-5 flex flex-row justify-between'>
        <NotebookIcon  className='text-white' size={25}/>
        <div className='flex flex-row gap-10 text-white'>
        <button className="btn btn-ghost hover:bg-white hover:text-blue-600"><Link to={"/"}>Login</Link></button>
        <button className="btn btn-ghost hover:bg-white hover:text-blue-600"><Link to={"/signup"}>Signup</Link></button>
        </div>
        
       </div>
    </>
  )
}

export default Navbar