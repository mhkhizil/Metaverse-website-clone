import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import {SiFastapi} from 'react-icons/si'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=''>
     <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-20 justify-center items-center">
     <div className="lg:flex hidden">
            <img src="https://space.pandamr.io/static/media/Art_Island.cba9d036ea3443031685.png" className='' alt="" />
        </div>
        <div className='flex flex-col items-center lg:items-start gap-20'>
            <Link to={'/'}>
            <img src="https://space.pandamr.io/static/media/logoSvg.9b2aa1fa8e4f55227f980e5a865ea0d0.svg" alt="pandamr logo" />
            </Link>
            <ul className='w-[90%] lg:w-[70%] grid gap-5'>
                <li className='border border-black rounded-full py-4 px-5'>
                    <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1895762952%3A1686837127429684&ffgf=1&ifkv=Af_xneH48XcG-eo_GLMVWAe4VuwqL_HVhLXZ1aw-ZZ9Tnvd9rrxaM5hKIz69T5A3NVTxMdKV7ZG_kg&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className='flex items-center gap-5 justify-center' alt="google login">
                        <FcGoogle className="text-4xl"/>
                        <span className='text-2xl font-medium'>Sign in with Google</span>
                    </a>
                </li>
                <li className='border border-black rounded-full py-4 px-5'>
                    <a href="https://appleid.apple.com/auth/authorize?client_id=io.pandamr.space&redirect_uri=https%3A%2F%2Fspace.pandamr.io%2F%3F_gl%3D1*geb6cz*_ga*NTE5MzYzODQyLjE2ODY3MTc4MjI.*_ga_3Q7X8PYEPR*MTY4NjgzNjA1NS44LjAuMTY4NjgzNjA1NS42MC4wLjA.dashboard&response_type=code%20id_token&scope=email%20name&response_mode=web_message&frame_id=8a40b7c8-baca-470c-bd7c-b964e3ffaf57&m=11&v=1.5.5" className='flex items-center gap-5 justify-center' alt="apple login">
                        <BsApple className="text-4xl"/>
                        <span className='text-2xl font-medium'>Sign in with Apple</span>
                    </a>
                </li>
                <li className='border-[#ff008c] border rounded-full py-4 px-5'>
                    <a href="https://exchange.fastex.com/login?continue=/api%2Foauth%2Fauthorize%3Fclient_id%3D12%26redirect_uri%3Dhttps%253A%252F%252Fspace.pandamr.io%252Ffastex%26response_type%3Dcode%26scope%3Daccount%2Bbalances%26state%3Dffffffffffffffffffffffffffffffffffffffffffffffffffffffffdsdvv" className='flex items-center gap-5 justify-center' alt="fastex login">
                        <SiFastapi className="text-4xl text-[#ff008c]"/>
                        <span className='text-2xl font-medium'>Sign in with FastEx</span>
                    </a>
                </li>
                <li className='mx-auto text-gray-500'>OR</li>
                <li className='border-gray-400 border rounded-full py-4 px-5'>
                    <a href="https://space.pandamr.io/login" className='flex items-center gap-5 justify-center' alt="fastex login">
                        <span className='text-2xl font-medium'>Use your Email</span>
                    </a>
                </li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default Login