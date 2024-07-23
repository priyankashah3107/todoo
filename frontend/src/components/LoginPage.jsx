
import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { User } from 'lucide-react';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value});
  }
  const isPending = false;
  return (
    <div>
       <Navbar />

       <div className="flex flex-col justify-center items-center mt-20">
         <h1 className='text-blue-600 font-semibold text-3xl mb-10'>Login</h1>

         <div className='w-[600px] h-[400px] border-2 border-blue-600'>

          <form className='w-[600px] flex flex-col items-center justify-center mt-5' onSubmit={handleSubmit}>
          <label className='input input-bordered rounded flex items-center gap-2 mb-4'>
						<User/>
						<input
							type='email'
							className='grow'
							placeholder='Email'
							name='email'
							onChange={handleInputChange}
							value={formData.email}
						/>
					</label>
          <label className='input input-bordered rounded flex items-center gap-2 mb-4'>
						<MdPassword />
						<input
							type='password'
							className='grow'
							placeholder='Password'
							name='password'
							onChange={handleInputChange}
							value={formData.password}
						/>
					</label>
          <button className='btn rounded-md w-[230px] btn-primary text-white'>Login</button>
          <div className='flex flex-col gap-2 mt-4'>
					<p className='text-black text-lg'>{"Don't"} have an account?
					<Link to='/signup' className='text-blue-600 pl-2'>Signin</Link>
          </p>
          <button className='btn rounded-md btn-primary text-white'>Login with Google</button>
				</div>
          </form>
         
         </div>
       </div>
    </div>
  )
}

export default LoginPage