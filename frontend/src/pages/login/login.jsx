import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserLogin from '../../hooks/UserLogin'

const Login = () => {

	const[username,setUsername] = useState("")
	const[password,setPass] = useState("")

	const {login} = UserLogin() // here I imported login from UserLogin 

	const handleSubmit = async(e)=>{
		e.preventDefault()
		await login(username,password)
	}
	const userdata = JSON.parse(localStorage.getItem("chat-user"))
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
 				<h1 className='text-3xl font-semibold text-center text-gray-800'>
 					Login
 					<span className='text-blue-500'> Messegio</span>
 				</h1>
 				<form onSubmit={handleSubmit}>
 					<div>
 						<label className='label p-2'>
 							<span className='text-base text-gray-800 label-text'>Username</span>
 						</label>
 						<input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
 					</div>
 					<div>
 						<label className='label'>
 							<span className='text-base text-gray-800 label-text'>Password</span>
 						</label>
 						<input
 							type='password'
 							placeholder='Enter Password'
 							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e)=>setPass(e.target.value)}
 						/>
 					</div>
 					<Link to={'/signup'} className='text-sm text-blue-600 cursor-pointer hover:underline hover:text-blue-950 mt-2 inline-block'>
 						{"Don't"} have an account?
 					</Link>
 					<div>
 						<button onClick={handleSubmit} className='btn btn-block  btn-sm mt-2 btn-primary'>Login</button>
 					</div>
 				</form>
 			</div>
			<p className='text-black ml-60 flex text-s font-semibold' > ❤️ From Jatin </p>
 		</div>
  )
}

export default Login