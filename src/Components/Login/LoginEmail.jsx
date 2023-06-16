import React, { useRef, useState } from 'react'
import {    useNavigate } from 'react-router-dom'
import {BsArrowLeftCircle} from 'react-icons/bs'

const LoginEmail = () => {
    const [isForgetPassword,setIsForgetPassword] = useState(false)
    const [isCheck,setIsCheck] = useState(false)
    const [submit,setSubmit] = useState()
    const nav = useNavigate()
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const inputRef = useRef('')

    const errorMessageEmail = document.getElementById('error-message-email')
    const handleForgetPassword = (e)=>{
        e.preventDefault()
        setIsForgetPassword(true)
    }

    const handleSubmit = ()=>{
        if(!inputRef.current.value.match(regEx)){
            setIsCheck(true)
        }
        
    }
    const changeText = ()=>{
        setIsCheck(false)
    }

    const goBack = ()=>{
        nav(setIsForgetPassword(false), -1)
    }
    
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-10 mx-auto'>
        <img src="https://space.pandamr.io/static/media/logoSvg.9b2aa1fa8e4f55227f980e5a865ea0d0.svg" alt="pandamr logo" />
        {
            !isForgetPassword  ? (
                <div className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>Enter your Email</h1>
                {isCheck && (
                <p className=' text-red-500 text-2xl p-2' id='error-message-email' aria-live='polite'>Incorrect email, please try again</p>
                )}
                </div>                
            ): (
                <div className='text-center grid gap-5 px-5'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>Forgot Password</h1>
                <p className='text-medium md:text-xl lg:text-2xl text-gray-400'>Enter email associated with your accounts and get verification code to reset your password</p>
                </div>                
            )
        }
        <input type="email" 
        ref={inputRef}
        placeholder='email@example.com' 
        onKeyDown={changeText}
        className={!isCheck ? ['text-[1.5rem] md:text-[2.5rem] lg:text-[5rem] text-center focus-visible:outline-none'] : ['text-[1.5rem] md:text-[2.5rem] lg:text-[5rem] text-center focus-visible:outline-none text-red-500']}  
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        aria-describedby='error-message-email'/>
        <button 
        onClick={handleSubmit}
        className='border border-black py-2 px-5 rounded-full'
        type='submit'
        aria-label='submit'
        value={submit}>
            Next
        </button>
        {
            !isForgetPassword &&  <p onClick={handleForgetPassword}>Forget password</p>
        }
       
        <button onClick={goBack} className='absolute top-20 left-20'>
            <BsArrowLeftCircle/>
        </button>
    
    </div>
  )
}   

export default LoginEmail